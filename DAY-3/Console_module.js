const { error } = require('console')
const fs = require ('fs')
const  out = fs.createWriteStream ('./stdout.log')
const err = fs.createWriteStream ('./stderr.log')
// above two line for create a fs modele write strime it will only use for writting perpose
const Myobject = new console.Console (out , err)
// Myobject are use as a console
Myobject.log("Sahil joshi")
Myobject.error(new Error ("error"))

const num = "third";

Myobject.warn(`this is the ${num} warning `)


var a =10 , b=15 ;
// asserts are use for if any error are occur then it will sow the error otherwise cant show the error
console.assert ( a == b , "error")
console.assert ( a != b , "error")

console.count("a");
console.count("b");
console.count("b");
console.count("a");
console.count("a");


