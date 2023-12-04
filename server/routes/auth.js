const router = require("express").Router();
const passport = require("passport");
const User = require("../models/User"); // Assuming this is the path to your User model
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("passport");
/*
// SIGN-UP WITH GOOGLE 
router.get('/google/sign-up', (req, res) => {
    const { email, firstName, lastName, googleId } = req.user._json;
      console.log(email, firstName, lastName, googleId);
    // Check if the user already exists
    User.findOne({ email }, (err, existingUser) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Internal Server Error' });
        }

        if (existingUser) {
            // User already exists, handle accordingly
            return res.status(400).json({ error: true, message: 'User already exists' });
        }

        // Create a new user for sign-up with Google
        const newUser = new User({
            email,
            firstName,
            lastName,
            googleId,
        });

        // Save the new user to the database
        newUser.save((saveErr) => {
            if (saveErr) {
                return res.status(500).json({ error: true, message: 'Failed to save user to the database' });
            }

            // Redirect to a success page or respond with a success message
            res.redirect("http://localhost:3000/home"); // Adjust the route accordingly
        });
    });
});

*/
// SIGN-IN WITH GOOGLE
router.get("/login/success", (req, res) => {
    console.log("kjashdkjhaskjf")
	if (req.user) {
		res.status(200).json({
			error: false,
			message: "Successfully Loged In",
			user: req.user,
		});
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});

router.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});

router.get("/google", passport.authenticate("google", {scope: ["profile", "email"]} ));

router.get(
    "/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/login/failed",
    }),
    (req, res) => {
      res.redirect('http://localhost:3000/home');
    }
  );  
router.get("/logout", (req, res) => {
	req.logout();
	res.redirect(process.env.CLIENT_URL);
});

module.exports = router;