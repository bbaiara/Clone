const express = require('express');
const router = express.Router();

// Sample Data
let userStatistics = [
  { id: 1, userId: 1, productivityScore: 80 },
  { id: 2, userId: 1, productivityScore: 90 },
  { id: 3, userId: 2, productivityScore: 75 },
];

// Statistics API - GET USER'S PRODUCTIVITY
router.get('/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const userStats = userStatistics.filter((stats) => stats.userId === userId);
  res.json(userStats);
});

// Statistics API - ADD NEW DATA POINTS FOR PRODUCTIVITY TRACKING
router.post('/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const newData = req.body;
  newData.userId = userId;
  newData.id = userStatistics.length + 1;
  userStatistics.push(newData);
  res.json(newData);
});

module.exports = router;
