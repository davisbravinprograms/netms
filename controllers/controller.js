const Schema = require('../models/schema')

exports.text =  (req , res)=>{
    res.render('index')
}


exports.landingpage = (req, res) =>{
res.render('landing_page')
}


exports.message = (req , res)=>{
  res.send ('<h1>Hello Express</h1>')
}

exports.posts =async (req , res)=>{
  const data = await new Schema()
  const {name , age} = req.body

  data.save({name , age})
                        .then(()=>{
                          res.redirect('/index')
                        })
                        .catch((err)=>{
                          throw err
                        })
  
}