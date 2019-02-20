/*
============================================
; Title:  Discussion 1.1
; Author: William Thomason
; Date:   19 February 2019
; Description: Exception Handling
;===========================================
*/

//HEADER
const header = require('../thomason-header.js');
console.log(header.display("William", "Thomason", "Discussion 7.2") + "\n");


//Fruits constructor
function Fruits(type, color, price){
  this.type = type;
  this.color = color;
  this.price = price;
}

//Fruits prototype that will either return fruit type or a string with fruit information
Fruits.prototype = {
  displayFruitType : function(){ return this.type; },
  displayFruit : function(){
    return "Type: " + this.type +
    " Color: " + this.color +
  " Price: $" + this.price;
  }
}

var apple = new Fruits("Apple", "Red", "0.50");

console.log(apple.displayFruit());

console.log("\n" + apple.displayFruitType())
