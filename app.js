
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const Mongostore = require('connect-mongodb-session')(session)
require('dotenv').config()

const app = express();

app.set('x-powered-by' , false)

// Passport Config
require('./config/passport')(passport);

// DB Config
// const db = 'mongodb://localhost:27017/NETDATA';
const db = process.env.DB_URI


const store = new Mongostore({
  uri : db,
  collection : 'mySession'
})


// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true },
    { useUnifiedTopoly: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// EJS
// app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    store : store
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());


// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/', require('./routes/router.js'));
app.use('/users', require('./routes/users.js'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running on  ${PORT}`));
