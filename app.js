const express = require('express')
const port = 3000
const app  = express()
const mongoose = require('mongoose')
const Schema = require('./models/schema')


//Database

const db = 'mongodb://localhost:27017/TODOS'

mongoose.connect( db , {useNewUrlParser : true} , (err)=>{
    if(!err){
        console.log('database connected')
    }else{
        console.log('Error ' + err)
    }
})


app.set('view engine' , 'ejs')
app.use(express.urlencoded({extended : false}))

app.get('/index' , async(req, res)=>{

 const data = await Schema.find()

    res.render('index' , {data})
} )


app.post('/todo' , async(req , res) =>{
    const todoEntry  =  await new Schema()

    todoEntry.todo = req.body.todo
    todoEntry.save()
              .then(()=>{
                  res.redirect('/index')
              }).catch((err)=>{
                  console.log('Error ' + err)
              })
})

app.use('/' , (require('./routes/router')))


app.listen(port , (err)=>{
    if(!err){
       console.log(`Server listening on port ${port}`)
    }else{
        console,log('Error ' + err)
    }
})