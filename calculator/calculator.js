window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  // Get the inputs from the DOM.
  const inputAmount = document.getElementById("loan-amount").value;
  const inputYears = document.getElementById("loan-years").value;
  const inputRate = document.getElementById("loan-rate").value;
  // Put some default values in the inputs
  if(!inputAmount) {
    inputAmount = 1000;
  }
  if(!inputYears) {
    inputYears = 5;
  }
  if(!inputRate) {
    inputRate = 0.08;
  }
  // Call a function to calculate the current monthly payment
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
