"use strict";
function $(selector) {
    return document.querySelector(selector);
}

document.addEventListener('DOMContentLoaded', function() {
    // Attach processEntries() function to the click event of the Calculate button
    $('#calculateBtn').addEventListener('click', processEntries);

    // Attach event handler for the click event of the Clear button
    $('#clearBtn').addEventListener('click', clearFields);

    // Attach event handlers for the click events of the Subtotal and Tax Rate text boxes
    $('#subtotal').addEventListener('click', clearField);
    $('#taxRate').addEventListener('click', clearField);

    // Move cursor to the Subtotal field
    $('#subtotal').focus();
});

// Event handler function to process user entries, calculate sales tax, and display the result
function processEntries() {
    // user input
    const subtotal = parseFloat($('#subtotal').value);
    const taxRate = parseFloat($('#taxRate').value);

    // Validating the input
    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
        alert('Subtotal must be > 0 and < 10000');
        return;
    }
    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert('Tax Rate must be > 0 and < 12');
        return;
    }

    // Calculate sales tax
    const salesTax = subtotal * (taxRate / 100);

    // Calculate total including tax
    const total = subtotal + salesTax;

    // Display results
    $('#salestax').value = salesTax.toFixed(2);
    $('#Total').value = total.toFixed(2);
}

// Event handler to clear all text boxes and move cursor to the Subtotal field
function clearFields() {
    $('#subtotal').value = '';
    $('#taxRate').value = '';
    $('#salestax').value = '';
    $('#Total').value = '';
    $('#subtotal').focus();
}

// Event handler to clear the data from the clicked text box
function clearField(event) {
    event.target.value = '';
}