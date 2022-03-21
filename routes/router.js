const express = require('express')
const router = express.Router()
const Schema = require('../models/schema')
const {text , message  , posts , landingpage , login , register , admin , home , form} = require('../controllers/controller')

router.get('/index' , text )
router.get('/landingpage' , landingpage )
router.get('/message' , message)
router.post('/data' , posts)
router.get('/login' , login)
router.get('/register' , register)
router.get('/admin' , admin)
router.get('/form' , form)
router.get('/home' , home)

module.exports = router;