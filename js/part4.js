// $ function implementation
function $(selector) {
    return document.querySelector(selector);
}

document.addEventListener('DOMContentLoaded', function() {
    // 1. Declaration of constant emailPattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 2. Move focus to "Arrival date" text box
   $('input[name="arrival_date"]').focus();

    // 3. Event handler for form submission
    $('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Validation
        let arrivalDate = $('input[name="arrival_date"]').value.trim();
        let nights = $('input[name="nights"]').value.trim();
        let email = $('input[name="email"]').value.trim();
        let phone = $('input[name="phone"]').value.trim();

        // Clear previous error messages
        $('input[name="arrival_date"]').nextElementSibling.textContent = '';
        $('input[name="nights"]').nextElementSibling.textContent = '';
        $('input[name="email"]').nextElementSibling.textContent = '';
        $('input[name="phone"]').nextElementSibling.textContent = '';

        // Check if any field is empty
        if (arrivalDate === '') {
            $('input[name="arrival_date"]').nextElementSibling.textContent = 'Please enter arrival date.';
            return;
        }

        if (nights === '') {
            $('input[name="nights"]').nextElementSibling.textContent = 'Please enter number of nights.';
            return;
        }

        // Check if nights is numeric
        if (isNaN(nights)) {
            $('input[name="nights"]').nextElementSibling.textContent = 'Must be numberic';
            return;
        }

        // Check if email is empty or not in the correct format
        if (email === '') {
            $('input[name="email"]').nextElementSibling.textContent = 'Please enter your email address.';
            return;
        } else if (!emailPattern.test(email)) {
            $('input[name="email"]').nextElementSibling.textContent = 'Please enter a valid email address.';
            return;
        }

        // Check if phone number is entered
        if (phone === '') {
            $('input[name="phone"]').nextElementSibling.textContent = 'Phone number is required.';
            return;
        }

        // If all validations pass, submit the form
        this.submit();
    });
});