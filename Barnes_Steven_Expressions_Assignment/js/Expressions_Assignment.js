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
var bodyWeight = 173


//Calculate the weight of the body armour

var bodyArmor = prompt(" how much does your bodyArmour weigh?");
console. log(bodyArmour);
var bodyArmor =80

//Calculate the total weight of the user
var totalWeight = bodyWeight + bodyArmor

//Alert user with total weight
alert(name+" you weigh "+totalWeight+" pounds.");

/*
I typed in 173 for my weight
and added the weight of the body armour
which is 80
and it said 253
 */
