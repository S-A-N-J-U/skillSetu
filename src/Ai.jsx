import React, { useState, useCallback } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

import puter from "@heyputer/puter.js";


import { 
  AI_SYSTEM_PROMPT, 
  metricConfig, 
  buildPresenceChecklist 
} from "./constants.js";


pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function Ai() {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [resumeText, setResumeText] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");


  const extractTextFromPDF = useCallback(async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const textPromises = [];

    for (let i = 1; i <= pdf.numPages; i++) {
      textPromises.push(
        pdf.getPage(i).then(async (page) => {
          const textContent = await page.getTextContent();
          return textContent.items.map((item) => item.str).join(" ");
        })
      );
    }

    const pagesText = await Promise.all(textPromises);
    return pagesText.join("\n");
  }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setErrorMessage("Please select a valid PDF file.");
      return;
    }

    setErrorMessage("");
    setUploadedFile(file);

    try {
      const extracted = await extractTextFromPDF(file);
      if (!extracted.trim()) {
        setErrorMessage("No readable text found in PDF. It may contain scanned images or missing font mappings.");
        return;
      }
      setResumeText(extracted);
    } catch (err) {
      console.error("PDF Parsing Error:", err);
      setErrorMessage("Failed to parse PDF. Please ensure the document is not password protected.");
    }
  };

  const handleAnalyze = async () => {
    if (!resumeText) return;
    setIsLoading(true);
    setErrorMessage("");

    try {
      const prompt = `${AI_SYSTEM_PROMPT}\n\nResume Document Content:\n${resumeText}`;

      const response = await puter.ai.chat(prompt, {
        model: "gpt-4o-mini"
      });

      let rawContent = response?.message?.content || response?.text || response;
      if (typeof rawContent !== "string") {
        rawContent = JSON.stringify(rawContent);
      }

      const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("AI response did not return valid JSON structure.");
      }

      const parsedData = JSON.parse(jsonMatch[0]);

      if (parsedData.error) {
        setErrorMessage(parsedData.error);
        setAnalysis(null);
      } else {
        setAnalysis(parsedData);
      }
    } catch (err) {
      console.error("Analysis Error:", err);
      setErrorMessage(err.message || "An error occurred during analysis.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setUploadedFile(null);
    setResumeText("");
    setAnalysis(null);
    setErrorMessage("");
  };

  const formatScore = (val) => {
    if (!val && val !== 0) return "0%";
    const str = String(val).trim();
    return str.endsWith("%") ? str : `${str}%`;
  };


  const strengthsList = analysis?.topStrengths || analysis?.strengths || [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-slate-800">
  
      <header className="text-center mb-10">
        <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 border border-indigo-200">
          Powered by Puter AI
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-3 text-slate-900 tracking-tight">
          AI Resume Analyzer
        </h1>
        <p className="text-sm text-slate-500 mt-2">
          Upload your resume in PDF format to receive instant feedback and ATS scoring.
        </p>
      </header>

  
      {!analysis && (
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center border-2 border-dashed border-indigo-200 p-10 rounded-2xl bg-white shadow-md">
          <input
            type="file"
            id="fileInput"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="fileInput"
            className="cursor-pointer flex flex-col items-center justify-center w-full"
          >
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-3xl mb-4 text-indigo-600 shadow-sm">
              📄
            </div>
            <p className="text-lg font-bold text-slate-800">
              {uploadedFile ? uploadedFile.name : "Click to browse or drop your PDF here"}
            </p>
            <p className="text-xs font-medium text-slate-400 mt-1">Accepts PDF format (Max 10MB)</p>
          </label>

          {errorMessage && (
            <div className="mt-5 p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs font-semibold text-red-700 w-full text-left">
              ⚠️ {errorMessage}
            </div>
          )}

          <button
            onClick={handleAnalyze}
            disabled={!resumeText || isLoading}
            className="mt-6 px-8 py-3.5 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer text-sm"
          >
            {isLoading ? "Analyzing Resume..." : "Analyze Resume"}
          </button>
        </div>
      )}

      {analysis && (
        <div className="space-y-6">
        
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div>
              <span className="text-xs text-indigo-600 font-bold uppercase tracking-wider">Evaluation Complete</span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Resume Performance Score</h2>
              <p className="text-sm font-normal text-slate-600 mt-2 leading-relaxed max-w-2xl">{analysis.summary}</p>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <div className="w-24 h-24 rounded-full border-4 border-indigo-600 bg-indigo-50 flex items-center justify-center text-2xl font-black text-indigo-700 shadow-inner">
                {formatScore(analysis.overallScore)}
              </div>
              <button
                onClick={handleReset}
                className="mt-3 text-xs font-bold text-indigo-600 hover:text-indigo-800 underline cursor-pointer transition-colors"
              >
                New Analysis
              </button>
            </div>
          </div>

      
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-emerald-200 shadow-sm">
              <h3 className="text-base font-bold text-emerald-800 mb-4 flex items-center gap-2">
                <span className="text-lg">💪</span> Top Strengths
              </h3>
              {strengthsList.length > 0 ? (
                <ul className="space-y-3 text-sm font-medium text-slate-700">
                  {strengthsList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-snug">
                      <span className="text-emerald-500 font-bold shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-slate-400 italic">No specific strengths returned.</p>
              )}
            </div>

            <div className="p-6 rounded-2xl bg-white border border-amber-200 shadow-sm">
              <h3 className="text-base font-bold text-amber-800 mb-4 flex items-center gap-2">
                <span className="text-lg">💡</span> Key Improvements
              </h3>
              <ul className="space-y-3 text-sm font-medium text-slate-700">
                {analysis.improvements?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-snug">
                    <span className="text-amber-500 font-bold shrink-0">!</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

     
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-5">Detailed Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {metricConfig?.map((metric) => {
                const val = analysis.performanceMetrics?.[metric.key] || 0;
                return (
                  <div key={metric.key} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex justify-between text-sm font-bold mb-1">
                      <span className="text-slate-800">{metric.label}</span>
                      <span className="text-indigo-600 font-extrabold">{val}%</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-3 leading-normal">{metric.desc}</p>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${val}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-lg">🎯</span> ATS Compatibility Checklist
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {buildPresenceChecklist?.map((item) => {
                const isPresent = Boolean(analysis.presenceCheck?.[item.id]);
                return (
                  <div key={item.id} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className={isPresent ? "text-emerald-600 font-black text-base" : "text-rose-500 font-black text-base"}>
                      {isPresent ? "✓" : "✗"}
                    </span>
                    <span className="text-xs font-bold text-slate-700">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}