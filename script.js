const display = document.getElementById("display");

function appendValue(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// New logic to calculate tips
function calculateTip() {
  const bill = parseFloat(document.getElementById("bill").value);
  const tipPercentage = parseFloat(
    document.getElementById("tipPercentage").value,
  );
  const people = parseInt(document.getElementById("people").value);

  // Validate our form input values
  if (
    isNaN(bill) ||
    bill <= 0 ||
    isNaN(tipPercentage) ||
    tipPercentage < 0 ||
    isNaN(people) ||
    people <= 0
  ) {
    alert("Please enter valid positive numbers.");
    return;
  }

  // Mathematical operations
  const totalTip = bill * (tipPercentage / 100);
  const totalBill = bill + totalTip;

  const tipPerPerson = totalTip / people;
  const totalPerPerson = totalBill / people;

  // Display formatted outputs restricted to two decimal places
  document.getElementById("tipAmount").innerText =
    `$${tipPerPerson.toFixed(2)}`;
  document.getElementById("totalAmount").innerText =
    `$${totalPerPerson.toFixed(2)}`;
}
