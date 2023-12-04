// Update the Achievements component (e.g., Achievements.js)
import React from 'react';
import eggcellentFocusBadge from '../assets/Achievement/achiev1.png';
import honkHeroBadge from '../assets/Achievement/achiev2.png';

const achievementsData = [
  {
    id: 1,
    name: 'Eggcellent Focus Award',
    description: 'You\'ve achieved the "Eggcellent Focus Award" for exceptional focus and concentration. Your ability to stay on task is truly eggstraordinary!',
  },
  {
    id: 2,
    name: 'Honk Hero',
    description: 'Congratulations! You are now a "Honk Hero" for consistently honking your way through tasks and challenges. Keep honking loudly!',
  },
  {
    id: 3,
    name: 'Task Tango Titan',
    description: 'As a "Task Tango Titan," you have mastered the dance of productivity. Your ability to gracefully navigate tasks is truly commendable!',
  },
  {
    id: 4,
    name: 'Winged Workaholic',
    description: 'You\'ve achieved "Winged Workaholic" status, soaring to new heights of concentration and productivity. Your dedication to focused work is unmatched, and this badge is a testament to your commitment to success. Keep honking, keep soaring!',
  },
  {
    id: 5,
    name: 'Goose Guru of Get Stuff Done',
    description: 'Behold the "Goose Guru of Get Stuff Done"! Your productivity skills are legendary, and you have become a true guru in accomplishing tasks. Honk your way to even greater achievements!',
  },
];

const badgeMappings = {
    'Eggcellent Focus Award': eggcellentFocusBadge,
    'Honk Hero': honkHeroBadge,
    // ... add other badge mappings
  };
  
  const Achievements = () => {
    // For demonstration purposes, assume the user has achieved the first two achievements
    const achievedAchievements = achievementsData.slice(0, 2);
  
    // For demonstration purposes, assume the selected award is the first achievement
    const selectedAward = achievementsData[0];
  
    return (
      <div className="flex">
        <div className="flex-1">
          <h1>Latest Achievements</h1>
          <ul>
            {achievedAchievements.map((achievement) => (
              <li key={achievement.id}>
                <h2>{achievement.name}</h2>
                {/* Import and display SVG badge */}
                {badgeMappings[achievement.name] && (
                  <img src={badgeMappings[achievement.name]} alt={`${achievement.name} Badge`} />
                )}
              </li>
            ))}
          </ul>
        </div>
  
        <div className="flex-1">
          {/* Omitted rendering for Unachieved Achievements */}
        </div>
  
        <div className="flex-1">
          <h1>Selected Award</h1>
          <h2>{selectedAward.name}</h2>
          {/* Import and display SVG badge */}
          {badgeMappings[selectedAward.name] && (
            <img src={badgeMappings[selectedAward.name]} alt={`${selectedAward.name} Badge`} />
          )}
        </div>
      </div>
    );
  };
  
  export default Achievements;