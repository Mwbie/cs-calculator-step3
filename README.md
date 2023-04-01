# cs-calculator-step3
This module contains the code for the calculator. It includes the following:

Variables
Functions
Event Listeners
Variables
The module defines the following variables:

buttonContainer
: A constant variable that stores the reference to the element with the class name 
numbers
mainDisplay
: A constant variable that stores the reference to the element with the class name 
zero
historySection
: A constant variable that stores the reference to the element with the class name 
history
secondaryDisplay
: A constant variable that stores the reference to the element with the id 
first-number
historyMsg
: A constant variable that stores the reference to the element with the id 
msg
result
: A variable that stores the result of the calculation
pointFlag
: A variable that checks if the decimal point has been used
temp
: A variable that stores temporary values
historyArray
: An array that stores the history
calcArray
: An object that stores the calculation array
Functions
The module defines the following functions:

calculation
: A function that calculates the result of the operation
selectButton
: A function that selects the button
pushToArray
: A function that pushes the numbers and operators to the calculation array
Event Listeners
The module defines the following event listeners:

historySection
: An event listener that listens for clicks on the history and memory buttons
buttonContainer
: An event listener that listens for clicks on the different buttons
The different buttons perform different operations depending on the id of the button.

btn-div
: Divides the two numbers
btn-mul
: Multiplies the two numbers
btn-minus
: Subtracts the two numbers
btn-plus
: Adds the two numbers
btn-equal
: Calculates the result of the operation
btn-clear
: Clears the display
btn-back-space
: Deletes the last digit
btn-percentage
: Calculates the percentage
btn-last-clear
: Clears the last digit
btn-radical
: Calculates the square root
btn-pow-two
: Calculates the square of the number
btn-pow-three
: Calculates the cube of the number
btn-one-div
: Calculates the inverse of the number
btn-Pn
: Changes the sign of the number
btn-point
: Adds a decimal point
