const express = require('express')
const router = express.Router()
const Schema = require('../models/schema')
const {text , message  , posts , landingpage} = require('../controllers/controller')

router.get('/index' , text )
router.get('/landingpage' , landingpage )
router.get('/message' , message)
router.post('/data' , posts)

module.exports = router;