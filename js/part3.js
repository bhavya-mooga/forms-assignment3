function $(selector) {
    return document.querySelector(selector);
}

function processEntry() {
    const incomeInput = $('#income');
    const taxResultInput = $('#taxResult');

    const income = parseFloat(incomeInput.value);
    if (isNaN(income) || income <= 0) {
        taxResultInput.value = 'Invalid input. Please enter a positive number.';
    } else {
        const tax = calculateTax(income);
        taxResultInput.value = tax.toFixed(2);
    }

    incomeInput.focus();
}

function calculateTax(income) {
    if (income <= 9875) {
        return income * 0.10;
    } else if (income <= 40125) {
        return 987.50 + (income - 9875) * 0.12;
    } else if (income <= 85525) {
        return 4617.50 + (income - 40125) * 0.22;
    } else if (income <= 163300) {
        return 14605.50 + (income - 85525) * 0.24;
    } else if (income <= 207350) {
        return 33271.50 + (income - 163300) * 0.32;
    } else if (income <= 518400) {
        return 47367.50 + (income - 207350) * 0.35;
    } else {
        return 156235.00 + (income - 518400) * 0.37;
    }
}