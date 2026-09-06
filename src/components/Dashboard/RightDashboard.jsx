import React, { useState, useEffect } from 'react';
import { Input } from "../index";

function RightDashboard() {
  const [formData, setFormData] = useState({
    skills: '',
    cgpa: '',
    githubRepo: '',
    resume: null,
     
  });

  const [scoreResult, setScoreResult] = useState(null);


  useEffect(() => {
    const savedSkills = localStorage.getItem('user_skills');
    const savedCgpa = localStorage.getItem('user_cgpa');
    const savedGithub = localStorage.getItem('user_github');
    const savedScore = localStorage.getItem('user_score');

    setFormData((prev) => ({
      ...prev,
      skills: savedSkills || '',
      cgpa: savedCgpa || '',
      githubRepo: savedGithub || '',
    }));

    if (savedScore !== null) {
      setScoreResult(Number(savedScore));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
    }
  };

  const calculateScore = (e) => {
    e.preventDefault();
    let calculatedScore = 0;

    if (formData.skills.trim()) {
      const skillCount = formData.skills
        .split(',')
        .filter((skill) => skill.trim().length > 0).length;
      calculatedScore += Math.min(skillCount * 7, 35);
    }


    const cgpaNum = parseFloat(formData.cgpa);
    if (!isNaN(cgpaNum) && cgpaNum > 0) {
      calculatedScore += Math.min(Math.round((cgpaNum / 10) * 25), 25);
    }

    if (
      formData.githubRepo.trim().includes('github.com') ||
      formData.githubRepo.trim().startsWith('http')
    ) {
      calculatedScore += 20;
    }


    if (formData.resume) {
      calculatedScore += 20;
    }


    setScoreResult(calculatedScore);
    localStorage.setItem('user_skills', formData.skills);
    localStorage.setItem('user_cgpa', formData.cgpa);
    localStorage.setItem('user_github', formData.githubRepo);
    localStorage.setItem('user_score', calculatedScore.toString());
  };

  const handleClear = () => {
    localStorage.removeItem('user_skills');
    localStorage.removeItem('user_cgpa');
    localStorage.removeItem('user_github');
    localStorage.removeItem('user_score');
    setFormData({ skills: '', cgpa: '', githubRepo: '', resume: null });
    setScoreResult(null);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-100 m-4 font-sans">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          Profile & Score Evaluator
        </h2>
        <button
          type="button"
          onClick={handleClear}
          className="text-xs text-red-500 hover:underline font-semibold"
        >
          Clear Storage
        </button>
      </div>

      <form onSubmit={calculateScore} className="flex flex-col gap-4">
    
        <div>
          <Input
            className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            label="Skills (comma separated): "
            placeholder="e.g. React, JavaScript, HTML, CSS"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>

        <div>
          <Input
            className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            label="CGPA (out of 10): "
            placeholder="e.g. 8.5"
            type="number"
            step="0.01"
            max="10"
            min="0"
            name="cgpa"
            value={formData.cgpa}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            GitHub Repository URL:
          </label>
          <input
            type="url"
            name="githubRepo"
            placeholder="https://github.com/username/repository"
            value={formData.githubRepo}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Upload Resume (PDF/DOCX):
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
          />
          {formData.resume && (
            <p className="text-xs text-gray-500 mt-1">
              Selected: {formData.resume.name}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="mt-2 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-200 shadow-md"
        >
          Calculate & Save
        </button>
      </form>


      {scoreResult !== null && (
        <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider block">
            Evaluated Score
          </span>
          <span className="text-4xl font-extrabold text-blue-600 block my-1">
            {scoreResult} / 100
          </span>
          <p className="text-xs text-gray-500">
            {scoreResult >= 75
              ? 'Excellent profile!'
              : scoreResult >= 50
              ? 'Good start! Consider adding more skills or projects.'
              : 'Add more details to increase your score.'}
          </p>
        </div>
      )}
    </div>
  );
}

export default RightDashboard;