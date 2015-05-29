/*
Steven Barnes
Section 01
5-28-2015
Barnes_Steven_Functions_Assignment
 */

// Ask the user for current air speed
var kmph = prompt("Lets figure out your current air speed in mph. What is your current speed in kmph.");

//Validate the prompt
while(kmph==="" || isNaN(kmph)) {
    //Code will run if answerd with a number
    //reprompt the user with if not true using same variable
 if (isNaN(kmph)){
        kmph = prompt(" Please only enter numbers to calculate.");

    }

}

//Prompt user for mph

var mph =prompt(" What does one kmph equal in mph.");

//Validate the prompt
while(mph==="" || isNaN(mph)){
    //Code will run if true
    //reprompt the user with same variable
    if(isNaN(mph)){
        mph = prompt(" Please only numbers to calculate.")
    }
}

