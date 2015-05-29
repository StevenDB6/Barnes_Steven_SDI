/*
Steven Barnes
Section 01
5-28-2015
Barnes_Steven_Functions_Assignment
 */

// Ask the user for current air speed
var knots = prompt("Lets figure out your current air speed in mph. What is your current speed in knots?");

//Validate the prompt
while(knots==="" || isNaN(knots)) {
    //Code will run if answerd with a number
    //reprompt the user with if not true using same variable
 if (isNaN(knots)){
        knots = prompt(" Please only enter numbers to calculate.");

    }

}

//Prompt user 1 knot = mph

var mph =prompt(" What does one knot equal in mph?");

//Validate the prompt
while(mph==="" || isNaN(mph)) {
    //Code will run if answerd with a number
    //reprompt the user with if not true using same variable
    if (isNaN(mph)) {
        mph = prompt(" Please only enter numbers to calculate.");

    }

}

//Convert knots into miles per hour

var airSpeed = knots * mph

// Tell the user current airspeed in mph
console. log("Your current airspeed is " +airSpeed+ "mph. ");

/*
 I was able to to successfully multiply 60 X 1.150
 and get the answer 69.
 */


function unknownNumber(){
// Get a random number
var randomNumber =Math.random()*(mph*knots)
console. log(randomNumber);

}

// Make a workable function

unknownNumber();