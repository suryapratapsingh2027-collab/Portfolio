import React from 'react';

const SPLogo = ({ width = "400px", className = "" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`} style={{ width }}>
      <svg 
        viewBox="0 0 500 400" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
      >
        {/* Main Base Structure (Dark Gray/Black) */}
        <path 
          d="M150,300 C80,300 40,260 40,200 C40,140 80,100 150,100 C200,100 230,130 230,130 L230,175 C230,175 200,145 160,145 C130,145 110,165 110,200 C110,235 130,255 160,255 C200,255 225,225 245,195 L275,145 C305,100 340,85 390,85 L460,85 L460,350 M410,85 L410,350" 
          stroke="#1A1A1A" 
          strokeWidth="42" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />

        {/* Inner White Stripe (The Inline) */}
        <path 
          d="M150,300 C80,300 40,260 40,200 C40,140 80,100 150,100 C200,100 230,130 230,130 L230,175 C230,175 200,145 160,145 C130,145 110,165 110,200 C110,235 130,255 160,255 C200,255 225,225 245,195 L275,145 C305,100 340,85 390,85 L460,85 L460,350 M410,85 L410,350" 
          stroke="white" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Subtle Glossy Overlay (Optional for 3D look) */}
        <path 
          d="M150,100 C180,100 200,115 210,125" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

export default SPLogo;