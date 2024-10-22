import React, { useState } from 'react';

interface AIIconProps {
  onClick: () => void;
}

const AIIcon: React.FC<AIIconProps> = ({ onClick }) => {
  return (
    <div className="absolute right-2 bottom-2 cursor-pointer" onClick={onClick}>
      <img src={chrome.runtime.getURL('icon.png')} alt="AI Icon" className="w-6 h-6" />
    </div>
  );
};

export default AIIcon;
