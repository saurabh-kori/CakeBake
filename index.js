const express  = require('express');
const port =8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');

//reading through post req
app.use(express.urlencoded());

//setting up cookie parser
app.use(cookieParser());

//use express layout
app.use(expressLayouts);

//use external and js file for sub pages
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use static file
app.use(express.static('./assests'));



//use express router
app.use('/',require('./routes'));


//setting up view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`error while connecting the server : ${err}`);
    }
    console.log(`Server s running on port : ${port}`);
});