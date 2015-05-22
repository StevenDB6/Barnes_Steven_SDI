/*
Steven Barnes
Section 01
5-21-2015
Barnes_Steven_Conditionals_Assignment
 */

 // Create a calculator that keeps track of how much money is in a piggy bank

// Create virtual piggy bank as an array
var piggyBank = ["penny", "dimes", "nickles", "quarters","penny"];

//print out the whole array
console.log(piggyBank);

//print out a specific coin use the index number
console.log(piggyBank[0]);

//How many items are inside of the array
console.log(piggyBank.length);


//create a variable to count the number of quarters in the array
var totalNumQuarters=0;

// Test each coin to see if it is a "quarter"

if(piggyBank[0]==="quarters") {
    //Code inside of here will run if that item is a quarter
    console.log("this item is a quarter");
    //add 1 to the total number of quarters
    totalNumQuarters++;
}else{
    //code inside of here will run if the item in not a quater
    console.log("Item is not a quater");
}

//Test second item in array
if(piggyBank[1 ]==="quarters") {
    //Code inside of here will run if that item is a quarter
    console.log("this item is a quarter");
    //add 1 to the total number of quarters
    totalNumQuarters++;
}else{
    //code inside of here will run if the item in not a quater
    console.log("Item is not a quater");
}

//Test third item
if(piggyBank[3]==="quarters") {
    //Code inside of here will run if that item is a quarter
    console.log("this item is a quarter");
    //add 1 to the total number of quarters
    totalNumQuarters++;
}else{
    //code inside of here will run if the item in not a quater
    console.log("Item is not a quater");
}

//Testing the forth item
if(piggyBank[2]==="quarters") {
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

//Create a variable to count the number of pennies in the array
var totalNumPenny=0;

if(piggyBank[3]==="penny") {
    //Code inside of here will run if that item is a penny
    console.log("this item is a penny");
    //add 1 to the total number of pennies
    totalNumPenny++;
}else{
    //code inside of here will run if the item in not a quater
    console.log("Item is not a penny");
}

//Test the first item
if(piggyBank[0]==="penny") {
    //Code inside of here will run if that item is a penny
    console.log("this item is a penny");
    //add 1 to the total number of pennies
    totalNumPenny++;
}else{
    //code inside of here will run if the item in not a quater
    console.log("Item is not a penny");
}

//Added a second penny

//Test the fifth item
if(piggyBank[4]==="penny") {
    //Code inside of here will run if that item is a penny
    console.log("this item is a penny");
    //add 1 to the total number of pennies
    totalNumPenny++;
}else {
    //code inside of here will run if the item in not a quater
    console.log("Item is not a penny");
}

//Console log the total number of pennies and quarters
console.log(totalNumPenny+" pennies in the piggyBank");
console.log(totalNumQuarters+" quarters in the piggyBank");

//Cycling through arrays, For loop

var pennyTotal = 0;

for(var i=0; i<piggyBank.length; i++){
    //Code run each loop
    console.log("the value of i is "+i);
    //log each item in an array
    console.log(piggyBank[i]);

    //Test each item to see if is a penny
    if(piggyBank[i]==="penny"){
        console.log("item is a penny!");
        //add one to total
        pennyTotal++;
    } else {
        console.log("not a penny");
    }

}

console.log("The total number of pennies in the piggy bank is "+ pennyTotal);


/*
I added another penny to get my results for the computer to calculate multiple pennies by creating a loop,
and I got the total number of two.
 */

