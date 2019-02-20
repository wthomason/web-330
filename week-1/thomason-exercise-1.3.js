/*
============================================
; Title:  Exercise 1.3
; Author: William Thomason
; Date:   19 February 2019
; Description: Exception Handling
;===========================================
*/

//HEADER
const header = require('../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 1.3") + "\n");

function CellPhone(manufacturer, model, color, price){
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    this.getPrice = function(){
      return this.price;
    }

    this.getModel = function(){
      return this.model;
    }

    this.getDetails = function(){
      return "Manufacturer: " + this.manufacturer +
      "\nModel: " + this.getModel() +
      "\nColor: " + this.color +
      "\nPrice: $" + this.getPrice();
    }
}

var android = new CellPhone("Android", "Galaxy S", "Black", "399.99");

console.log(android.getDetails());

