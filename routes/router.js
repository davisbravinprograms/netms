const express = require('express')
const router = express.Router()
const Schema = require('../models/schema')
const {text , message  , posts , landingpage , login , register , admin , home , form , welcome} = require('../controllers/controller')

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page


// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('admin', {
    user: req.user
  })
);


router.get('/index' , text )
router.get('/landingpage' , landingpage )
router.get('/message' , message)
router.post('/data' , posts)
router.get('/login' , login)
router.get('/register' , register)
router.get('/welcome' , welcome)


// router.get('/admin' ,   admin)
router.get('/form' , form)


router.get('/home' , home)


module.exports = router;