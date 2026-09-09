// ✅ Export the system prompt string directly as named exports
export const AI_SYSTEM_PROMPT = `First, determine if this document is actually a resume. Look for:
- Professional experience, work history, or employment information
- Education background, degrees, or academic information  
- Skills, qualifications, or professional competencies
- Contact information and personal details

If this is NOT a resume (e.g., invoice, receipt, contract, article, manual, etc.), respond with:
{
  "error": "This document does not appear to be a resume. Please upload a proper resume containing professional experience, education, and skills sections."
}

If this IS a resume, analyze it thoroughly and provide comprehensive feedback in this JSON format:
{
  "overallScore": "85%",
  "strengths": [
    "strength 1", 
    "strength 2", 
    "strength 3"
  ],
  "improvements": [
    "improvement 1", 
    "improvement 2", 
    "improvement 3"
  ],
  "keywords": [
    "keyword 1", 
    "keyword 2", 
    "keyword 3"
  ],
  "summary": "Brief overall assessment",
  "performanceMetrics": {
    "formatting": 80,
    "contentQuality": 75,
    "keywordUsage": 70,
    "atsCompatibility": 85,
    "quantifiableAchievements": 60
  },
  "actionItems": [
    "specific actionable item 1",
    "specific actionable item 2", 
    "specific actionable item 3"
  ],
  "proTips": [
    "professional tip 1",
    "professional tip 2"
  ]
}`;


export const ANALYZE_RESUME_PROMPT = AI_SYSTEM_PROMPT;

export const METRIC_CONFIG = [
  {
    key: "formatting",
    label: "Formatting",
    defaultValue: 7,
    colorClass: "from-emerald-400 to-emerald-500",
    shadowClass: "group-hover/item:shadow-emerald-500/30",
    icon: "🎨",
  },
  {
    key: "contentQuality",
    label: "Content Quality",
    defaultValue: 6,
    colorClass: "from-blue-400 to-blue-500",
    shadowClass: "group-hover/item:shadow-blue-500/30",
    icon: "📝",
  },
  {
    key: "atsCompatibility",
    label: "ATS Compatibility",
    defaultValue: 6,
    colorClass: "from-violet-400 to-violet-500",
    shadowClass: "group-hover/item:shadow-violet-500/30",
    icon: "🤖",
  },
  {
    key: "keywordUsage",
    label: "Keyword Usage",
    defaultValue: 5,
    colorClass: "from-purple-400 to-purple-500",
    shadowClass: "group-hover/item:shadow-purple-500/30",
    icon: "🔍",
  },
  {
    key: "quantifiableAchievements",
    label: "Quantified Results",
    defaultValue: 4,
    colorClass: "from-orange-400 to-orange-500",
    shadowClass: "group-hover/item:shadow-orange-500/30",
    icon: "📊",
  },
];

export const metricConfig = METRIC_CONFIG;


export const buildPresenceChecklist = [
  { id: "email", label: "Contact Information & Email" },
  { id: "summarySection", label: "Professional Summary" },
  { id: "education", label: "Education & Academic Section" },
  { id: "experience", label: "Work & Professional Experience" },
  { id: "keywords", label: "Industry Relevant Keywords & Skills" },
  { id: "quantified", label: "Quantified Achievements & Metrics" },
  { id: "actionVerbs", label: "Action Verbs at Bullet Starts" },
];


export const evaluatePresenceChecklist = (text) => {
  const hay = (text || "").toLowerCase();
  return [
    {
      label: "Standard Section Headings",
      present: /experience|education|skills|summary|objective|work history/.test(hay),
    },
    {
      label: "Contact Information",
      present: /email|phone|linkedin|github|portfolio|@|\.com/.test(hay),
    },
    {
      label: "Keywords & Skills",
      present: /skills|technologies|programming|software|tools|javascript|python|react|node|sql/.test(hay),
    },
    {
      label: "Quantified Achievements",
      present: /\d+%|\d+ percent|\d+ people|\$\d+|\d+ users|\d+ growth/.test(hay),
    },
    {
      label: "Action Verbs",
      present: /developed|created|implemented|managed|led|designed|built|improved|increased/.test(hay),
    },
  ];
};

const constants = {
  AI_SYSTEM_PROMPT,
  ANALYZE_RESUME_PROMPT,
  METRIC_CONFIG,
  metricConfig,
  buildPresenceChecklist,
  evaluatePresenceChecklist,
};

export default constants;