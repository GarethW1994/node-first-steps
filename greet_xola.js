//import external 'chalk' module
const chalk = require('chalk');
//import external 'figlet' module
const figlet = require('figlet');
//import external 'figures' module
const figures = require('figures');

//import greet module from greet.js
const greet = require('./greet');

const styledMessage = greet('Xola');


console.log(styledMessage);

figlet("Christian", function(err, data) {
   if (err) {
       console.log('Something went wrong...!');
       console.log(err);
       return;
   } 
    
//console.log(data);
    
});

console.log(figures.heart + " " + figures('NodeJS'));
