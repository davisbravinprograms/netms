

const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({

    todo :{
        type: String,
    }
})


module.exports = mongoose.model('mytodo' , dataSchema)