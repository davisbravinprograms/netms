const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const port = process.env.port || 3000
const app = express()



const db = process.env.DB_URI
mongoose.connect(db, 
    {useNewUrlParser : true},
    ).then(()=>{
        console.log('db connected')
    }).catch((err)=>{
         throw err
    })




app.set('view engine' , 'ejs')





app.use(express.urlencoded({extended : false}))
app.use(express.static('public'))
app.use('/', require('./routes/router'))

app.listen(port , (err)=>{
    if(!err){
        console.log('Server connected successful')
    }else{
        throw err
    }
})