// Importing Library 
const express = require('express');
const { getRoot, getCoins } = require('./Scripts/queries');

// Declaring variables
const PORT = 8085;
// Initializing the App
const App = express();

// Declaring Routes
App.get("/",getRoot)
App.get("/getCoins",getCoins)



// Listing on PORT
App.listen(PORT,error =>{
    if(error){
        console.log(`Error Occured : ${error}`);
    }
    console.log(`Server is Running on PORT : ${PORT}`);
})

