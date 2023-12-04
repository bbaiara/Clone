require('dotenv').config({ path: './config/config.env' });
const express = require('express');
const passport = require('passport');
// const cookieSession = require('cookie-session');
const connectDB = require('./config/db');
const passportStrategy = require('./passport');
const authRoute = require('./routes/auth');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const session = require('express-session');

const app = express();
connectDB();

// logging and CORS
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  app.use(cors({ origin: true, credentials: true })); // for communication with client
}

app.use(bodyParser.json());

app.use('/user', userRoutes);

// Google Passport
// app.use(
//   cookieSession({
//     name: 'session',
//     keys: ['cyberwolf'],
//     maxAge: 24 * 60 * 60 * 1000, // 24 hours
//   })
// );

app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(
  '/auth',
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE',
    credentials: true,
  })
);

app.use('/auth', authRoute);

// run dev
const PORT = process.env.PORT || 3000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
