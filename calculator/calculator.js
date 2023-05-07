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
  const values  = { amount: 10000, years: 10, rate: 4.5 };
  const amountUI = document.getElementById("loan-amount");
  amountUI.value = values.amount;
  const yearsUI = document.getElementById("loan-years");
  yearsUI.value = values.years;
  const rateUI = document.getElementById("loan-rate");
  rateUI.value = values.rate;
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
