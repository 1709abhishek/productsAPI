const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const db = require('./config/mongoose');
const Product = require('./api/models/productsModel');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const CustomMware = require('./config/middleware');


// mongoose instance connection url connection

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(flash());
// app.use(CustomMware.setFlash);

app.use('/', require('./api/routes/productsRoutes'));


app.listen(port, function(err){
    if(err){
        console.log('Error in running the server: ',err);
    }
     console.log(`server is running on port: ${port}`);
});