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

function update() {
  // Get the current values from the UI
  const currUIValues = getCurrentUIValues();
  // Update the monthly payment
  updateMonthly(calculateMonthlyPayment(currUIValues));
}

function calculateMonthlyPayment(values) {
  // Given an object of values (a value has amount, years and rate ),
  const monthlyPayment = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  return ((monthlyPayment * values.amount) / (1 - Math.pow((1 + monthlyPayment), -n))).toFixed(2);
}

function updateMonthly(monthly) {
  const monthlyUI = document.getElementById('monthly-payment');
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  monthlyUI.innerText = '$' + monthly;
}
