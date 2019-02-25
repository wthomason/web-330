/*
============================================
; Title:  Exercise 1.4
; File: thomason-exercise-1.4.js
; Author: William Thomason
; Date:   19 February 2019
; Description: Duck Typing, A.K.A “Interfaces”
;===========================================
*/

//HEADER
const header = require('../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 1.4") + "\n");

//START OF PROGRAM

//CONSTRUCTORS AND THEIR PROTOTYPES
function Car(model){
    this.model = model;
}

Car.prototype.start = function(){
    console.log("Car added to the race track.");
}

function Truck(model, year){
    this.model = model;
    this.year = year;
}

Truck.prototype.start = function(){
    console.log("Truck added to the race track.");
}

function Jeep(model, year, color){
    this.model = model;
    this.year = year;
    this.color = color;
}

Jeep.prototype.start = function(){
    console.log("Jeep added to the race track.");
}

//RACETRACK ARRAY
var racetrack = [];

//driveIt FUNCTION THAT PUSHES var vehicle to array and calls the prototype of the constructor
function driveIt(vehicle){
    vehicle.start();

    racetrack.push(vehicle);
}

//CREATING THE VARIABLES OF DATA AND LINKING THEM TO A CONSTRUCTOR
var camery = new Car("Camery");
var tundra = new Truck("Tundra", "2013");
var cherokee = new Jeep("Cherokee", "1998", "red");

console.log("");

//CALLING VARIABLES INTO THE driveIt FUNCTION
driveIt(camery);
driveIt(tundra);
driveIt(cherokee);

//OUPUT
console.log('\n-- The following vehicles have been added to the race track. --');
for(var x = 0; x < racetrack.length; x++){
 console.log(racetrack[x].constructor.name + ": " + racetrack[x]. model);
}
//END OF PROGRAM