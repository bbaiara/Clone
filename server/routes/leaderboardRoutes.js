const express = require('express');
const router = express.Router();

// Sample Data
let leaderboardData = [
  { userId: 1, productivityScore: 80 },
  { userId: 2, productivityScore: 90 },
  { userId: 3, productivityScore: 75 },
];

// Leaderboards API - GET OVERALL RANKINGS
router.get('/', (req, res) => {
  // Sort the leaderboardData based on productivityScore in descending order
  const overallRankings = leaderboardData.sort((a, b) => b.productivityScore - a.productivityScore);
  res.json(overallRankings);
});

// Leaderboards API - GET RANKINGS FOR A SPECIFIC CHALLENGE
router.get('/:challengeId', (req, res) => {
  const challengeId = req.params.challengeId; // Assuming challengeId is a string for this example
  // Filter the leaderboardData based on the provided challengeId
  const challengeRankings = leaderboardData.filter((entry) => entry.challengeId === challengeId);
  // Sort the challengeRankings based on productivityScore in descending order
  const sortedChallengeRankings = challengeRankings.sort((a, b) => b.productivityScore - a.productivityScore);
  res.json(sortedChallengeRankings);
});

module.exports = router;
