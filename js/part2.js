"use strict";

// Shorthand for document.querySelector
function $(selector) {
    return document.querySelector(selector);
}

document.addEventListener("DOMContentLoaded", function () {
    // Event handler for the Calculate button
    $("#userInput").addEventListener("click", function () {
        processEntry();
    });
});

// Function to process the user's entry
function processEntry() {
    var amount = parseInt($("#userInput").value);
    if (!isNaN(amount) && amount >= 0 && amount <= 99) {
        makeChange(amount);
    } else {
        alert("Please enter a valid number between 0 and 99.");
    }
}

// Function to calculate the change
function makeChange(amount) {
    var quarters = Math.floor(amount / 25);
    amount %= 25;
    var dimes = Math.floor(amount / 10);
    amount %= 10;
    var nickels = Math.floor(amount / 5);
    var pennies = amount % 5;

    // Display the results
    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;
}