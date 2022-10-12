

// Step 1: Declare and instantiate a variable of type Date to hold the current date
var date = new Date();
// Step 2: Declare a variable to hold the current year
var currentYear = 0;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = date.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector('#year').textContent = currentYear;