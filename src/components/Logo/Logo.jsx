import React from 'react';

function Logo({ width = '360px', className = '' }) {
  const primaryColor = '#4F46E5'; 
  const textColor = '#1F2937';    

  return (
    <div style={{ width: width }} className={`flex items-center ${className}`}>
      <svg
        viewBox="0 0 450 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        role="img"
        aria-label="Skill Setu Logo"
      >
      
        <g id="Icon_Bridge">
         
          <rect x="12" y="20" width="16" height="50" rx="5" fill={primaryColor} />
         
          <rect x="62" y="20" width="16" height="50" rx="5" fill={primaryColor} />
     
          <path
            d="M 28 28 C 36 12, 54 12, 62 28"
            stroke={primaryColor}
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
        
          <circle cx="45" cy="25" r="7" fill="#10B981" />
        </g>

        
        <g id="Text_SkillSetu">
          <text
            x="98"
            y="62"
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="52"
            fontWeight="400"
            fill={textColor}
          >
            Skill
          </text>
          <text
            x="210"
            y="62"
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="52"
            fontWeight="800"
            fill={primaryColor}
          >
            Setu
          </text>
        </g>
      </svg>
    </div>
  );
}

export default Logo;