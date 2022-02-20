const express = require('express')
const router = express.Router()

router.get('/users' , (req ,res) =>{
    const all_users = [

     {id : 1 , name : 'user1'},
     {id : 2 , name : 'user2'},
     {id : 3 , name : 'user3'},
     {id : 4 , name : 'user4'},
     {id : 5 , name : 'user5'},
     {id : 6 , name : 'user6'},
     {id : 7 , name : 'user7'},
     {id : 8 , name : 'user8'}

    ]
})


module.exports = router;