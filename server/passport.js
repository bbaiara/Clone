const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const User = require('./models/User.js');

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
/*
passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: 'http://localhost:3001/auth/google/callback',
			userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
			scope: ["profile", "email"],
		},
		function  (accessToken, refreshToken, profile, callback) {
			console.log("hakuna matata google sihnup")
			//console.log(callback)
			console.log("nash profile", profile)
			return callback(null, profile);
		}
	)
);
*/
passport.use(
	new GoogleStrategy(
	  {
		clientID: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		callbackURL: 'http://localhost:5001/auth/google/callback',
		userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
		scope: ['profile', 'email'],
	  },
	  async function (accessToken, refreshToken, profile, callback) {
		try {
		  // Check if the user already exists in the database
		  let user = await User.findOne({ email: profile.emails[0].value });
  
		  if (user) {
			// User already exists, update any necessary fields
			user.googleId = profile.id;
		  } else {
			// User doesn't exist, create a new user
			user = new User({
			  firstName: profile.name.givenName,
			  lastName: profile.name.familyName,
			  email: profile.emails[0].value,
			  googleId: profile.id,
			});
		  }
  
		  // Save the user to the database
		  await user.save();
  
		  // Pass the user information to the callback
		  return callback(null, user);
		} catch (error) {
		  console.error('Error in Google OAuth callback:', error);
		  return callback(error, null);
		}
	  }
	)
  );
  
