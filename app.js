
const express = require('express');
require('dotenv').config()
const app = express();
app.set('x-powered-by' , false)


// EJS

app.set('view engine', 'ejs');

app.use(express.static('public'))




// Routes
app.use('/', require('./routes/router.js'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running on  ${PORT}`));
