/*
============================================
; Title:  Exercise 2.2
; Author: William Thomason
; Date:   19 February 2019
; Description: Prototypes
;===========================================
*/

//HEADER
const header = require('../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 2.2") + "\n");

// start program

var person = {
    getAge: function () {
        return this.age;
    } 
}

var william = Object.create(person, {
    "age": {
        "value": "32"
    },
    "fullName": {
        "value": "William T. Thomason"
    }
});

william.getAge();

console.log("The person's full name is: '%s'", william.fullName);
console.log("The person's age is: '%s'", william.getAge());



// end program