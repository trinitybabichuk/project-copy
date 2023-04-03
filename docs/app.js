'use strict';

//FORM VALIDATION

// Get the form element
const form = document.getElementById("contact-form");

// Add an event listener to the form's submit button
form.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the form fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  // Validate the form inputs
  if (name === "") {
    alert("Please enter your name.");
  } else if (email === "") {
    alert("Please enter your email.");
  } else if (!isValidEmail(email)) {
    alert("Please enter a valid email.");
  } else {
    // If the form inputs are valid, submit the form
    form.submit();
  }
});

//the form is submitted only if all the form inputs are valid, and an alert message is displayed if any of the inputs are invalid. The isValidEmail() function uses a regular expression to validate the email format. 
// Function to validate email format using regex
//help from w3
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
//set up an alert to show form was submitted
function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var country = document.forms["myForm"]["country"].value;
  
    if (name == "" || email == "" || country == "") {
      alert("Please fill out all fields");
      return false;
    }
  
    // form was submitted
    alert("Form submitted successfully");
    return true;
  }

  //ALERT WHEN USER CLICKS INFO BUTTON 
  
  // Get the button element by its ID
var button = document.getElementById("myButton");

// Add a click event listener to the button
button.addEventListener("click", function() {
	alert("Thank you for your interest!  Please contact us at EMAIL ADDRESS to find out more information and join out PROGRAM program");
});

//MOUSEOVER EVENT TO CHANGE BACKGROUND COLORS

// Get all the card elements using the class name
var cards = document.getElementsByClassName("card");

// Loop through each card element and add the event listeners
for (var i = 0; i < cards.length; i++) {
  var card = cards[i];
  card.addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
  });
  card.addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
  });
}

//SCROLL TO TOP BUTTON

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}