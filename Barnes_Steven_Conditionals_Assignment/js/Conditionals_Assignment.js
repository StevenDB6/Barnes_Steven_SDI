/*
Steven Barnes
Section 01
5-21-2015
Barnes_Steven_Conditionals_Assignment
 */

 // Create a calculator that keeps track of how much money is in a piggy bank

// Create virtual piggy bank as an array
var piggyBank = ["penny", "dime", "nickle", "quarter", "penny"];

//print out the whole array
console.log(piggyBank);

//print out a specific coin use the index number
console.log(piggyBank[0]);

//How many items are inside of the array
console.log(piggyBank.length);


//create a variable to count the number of quarters in the array
var totalNumQuarters=0;

// Test each coin to see if it is a "quarter"

if(piggyBank[0]==="quarter") {
    //Code inside of here will run if that item is a quarter
    console.log("this item is a quarter");
    //add 1 to the total number of quarters
    totalNumQuarters++;
}else{
    //code inside of here will run if the item in not a quater
    console.log("Item is not a quater");
}

//Test second item in array
if(piggyBank[1 ]==="quarter") {
    //Code inside of here will run if that item is a quarter
    console.log("this item is a quarter");
    //add 1 to the total number of quarters
    totalNumQuarters++;
}else{
    //code inside of here will run if the item in not a quater
    console.log("Item is not a quater");
}

//Test third item
if(piggyBank[3]==="quarter") {
    //Code inside of here will run if that item is a quarter
    console.log("this item is a quarter");
    //add 1 to the total number of quarters
    totalNumQuarters++;
}else{
    //code inside of here will run if the item in not a quater
    console.log("Item is not a quater");
}

//Testing the forth item
if(piggyBank[2]==="quarter") {
    //Code inside of here will run if that item is a quarter
    console.log("this item is a quarter");
    //add 1 to the total number of quarters
    totalNumQuarters++;
}else{
    //code inside of here will run if the item in not a quater
    console.log("Item is not a quater");
}

//Console log the total number of quarters
console.log(totalNumQuarters+" quarters in the piggyBank");

//create a variable to count the number of pennies in the array
var totalNumPennies=0;

if(piggyBank[3]==="penny") {
    //Code inside of here will run if that item is a penny
    console.log("this item is a penny");
    //add 1 to the total number of pennies
    totalNumPennies++;
}else{
    //code inside of here will run if the item in not a quater
    console.log("Item is not a penny");
}

//Test the first item
if(piggyBank[0]==="penny") {
    //Code inside of here will run if that item is a penny
    console.log("this item is a penny");
    //add 1 to the total number of pennies
    totalNumPennies++;
}else{
    //code inside of here will run if the item in not a quater
    console.log("Item is not a penny");
}

//Test the fifth item
if(piggyBank[4]==="penny") {
    //Code inside of here will run if that item is a penny
    console.log("this item is a penny");
    //add 1 to the total number of pennies
    totalNumPennies++;
}else {
    //code inside of here will run if the item in not a quater
    console.log("Item is not a penny");
}

//Console log the total number of pennies and quarters
console.log(totalNumPennies+" pennies in the piggyBank");
console.log(totalNumQuarters+" quarters in the piggyBank");

//Subtract a quater from the piggyBank

//