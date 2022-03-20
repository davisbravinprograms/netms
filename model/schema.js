const mongoose = require('mongoose')
const dbschema = new mongoose.schema({

    name:{
      type : String,
    }, 

    age:{
    type : number
    }

})

module.exports = mongoose.model('dtschema' , dbschema)