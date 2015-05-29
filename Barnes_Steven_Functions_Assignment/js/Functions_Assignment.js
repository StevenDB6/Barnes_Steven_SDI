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

// Make a workable function
function unknownNumber(mph,knots){

// Get a new number
var roundedNumber = Math.round(mph*knots)
console. log(roundedNumber);

    //Return the value to our main code
    return roundedNumber;
}

var results= unknownNumber(mph,knots);
console. log(results);


/*
I was able to have the computer round to get differnt answers, and was also
able to return the value to my main code.
 */