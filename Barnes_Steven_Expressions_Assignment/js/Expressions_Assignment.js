/*
Steven Barnes
5/14/2015
Section 01
Barnes_Steven_Expressions_Assignment
 */

//alert("Testing to see if connected.");

// Create a weight calculator

//Ask the user what is your name
var name = prompt("Please type in your name:");
// console log the name to check it
console.log (name);

// Alert the user and say welcome
alert("Welcome "+ name+" Let's figure out how much you would weigh with body armour.");


//Ask the user how much do they weigh
var bodyWeight = prompt("How much do you weigh?");
console.log(bodyWeight);

//Calculate the weight of the body armour

var bodyArmour = prompt(" how much does your bodyArmour weigh?");
console. log(bodyArmour);

//Calculate the total weight of the user
var bodyWeight = 173;
var bodyArmour = 80;

var totalWeight = bodyWeight + bodyArmour

//alert user with total weight
alert(name+" you weigh "+totalWeight+" pounds.");
