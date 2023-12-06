const router = require("express").Router();
const passport = require("passport");
const User = require("../models/User"); // Assuming this is the path to your User model
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("passport");

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