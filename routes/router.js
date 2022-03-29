const express = require('express')
const router = express.Router()





router.get('/landingpage' ,  (req , res)=>{
    res.render('landing_page')
})

module.exports = router