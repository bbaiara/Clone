const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// User Sign-up API

router.get('/sign-up', function (req, res) {
  console.log('User Sign)');
  res.send("asdf");
});

router.post('/sign-up', async (req, res) => {
  try {
    console.log("hahah")
    console.log(req.body)
    
    const { firstName, lastName, email, password, studentId, department } = req.body;

    // Hash the password  
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      studentId,
      department,
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    console.log("error: " + error)
    console.error('Error during sign-up:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// User Sign-in API
router.post('/sign-in', async (req, res) => {
  console.log('it works)');
try {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    // compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      res.json({
        success: true,
        userData: user,
      });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } else {
    res.status(404).json({ error: 'User not found' });
  }
} catch (error) {
  console.error('Error during sign-in:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}
});

// User Profile API - GET USER
router.get('/:userId', async (req, res) => {
try {
  const userId = req.params.userId;
  const user = await User.findById(userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
} catch (error) {
  console.error('Error fetching user:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}
});

// User Profile API - PUT
router.put('/:userId', async (req, res) => {
try {
  const userId = req.params.userId;
  const updatedUser = req.body;
  const user = await User.findByIdAndUpdate(userId, updatedUser, { new: true });

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
} catch (error) {
  console.error('Error updating user:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}
});

// User Profile API - DELETE
router.delete('/:userId', async (req, res) => {
try {
  const userId = req.params.userId;
  const user = await User.findByIdAndDelete(userId);

  if (user) {
    res.json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
} catch (error) {
  console.error('Error deleting user:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}
});


module.exports = router;
