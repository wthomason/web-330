/*
============================================
; Title:  Exercise 3.3
; Author: William Thomason
; Date:   5 March 2019
; Description: The Singleton Pattern
;===========================================
*/

//HEADER
const header = require('../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 3.3") + "\n");

//START PROGRAM

var DatabaseSingleton = (function() {
    
    var instance;

    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!"); //sets instance to new object and returns it
        return postgresDatabase;
    }

    return {
        getInstance: function() {
            if (!instance) {
            instance = createInstance(); //checks to see if there is an instance if yes return it if no then call createInstance fucntion
            }
        return instance;
        }
    }
   })();

function databaseSingletonTest(){
    var oracle = DatabaseSingleton.getInstance(); //checks and stores instance into variable
    var postgres = DatabaseSingleton.getInstance();

    console.log("Same database instance? %s", oracle === postgres); //output (checking if they two variables contain the same instance)
}

databaseSingletonTest();


//END PROGRAM