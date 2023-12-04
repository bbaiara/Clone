// Avatars.js
import React from 'react';
import CivilEngineerGoose from '../assets/Goose/Goose1.svg';
import DesignerGoose from '../assets/Goose/Goose2.svg';
import BusinessGoose from '../assets/Goose/Goose3.svg';

const GooseAvatar = ({ name, size = 16 }) => {
  let avatarImage;
  let altText;

  switch (name) {
    case 'civilEngineer':
      avatarImage = CivilEngineerGoose;
      altText = 'Civil Engineer Goose Avatar';
      break;
    case 'designer':
      avatarImage = DesignerGoose;
      altText = 'Designer Goose Avatar';
      break;
    case 'business':
      avatarImage = BusinessGoose;
      altText = 'Business Goose Avatar';
      break;
    default:
      // Default to Civil Engineer Goose
      avatarImage = CivilEngineerGoose;
      altText = 'Civil Engineer Goose Avatar';
  }

  return (
    <div className={`w-${size} h-${size} text-gray-700`}>
      <img src={avatarImage} alt={altText} className="w-full h-full" />
    </div>
  );
};

export { GooseAvatar };
