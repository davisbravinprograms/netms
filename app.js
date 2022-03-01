const express = require(express)
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()


// database 

const db_uri = process.env.DB_URI;

mongoose.connect(db_uri , {useNewUrlParser : true}, (err)=>{
    if(!err)
        console.log('Database running')

        else{
            console.log('Error ' + err)
        }
})


app.set('views' , __dirname + '/views')
app.set('view engine' , 'ejs')



app.use('/' , require('./routes/router'))
app.listen(port , (err)=>{
    if(!err){
        console.log(`Server listening on port ${port}`)
    }else{
        console.log(err)
    }
})