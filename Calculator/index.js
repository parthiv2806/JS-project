function appendValue(value) {
  let x = document.getElementById("display");
  x.value += value;
}
function clearDisplay() {
  document.getElementById("display").value = "";
}
function deleteLast() {
  let y = document.getElementById("display");
  y.value = y.value.slice(0, -1);
}
function calculateResult() {
  let display = document.getElementById("display");

  if (display.value === "Error") {
    display.value = ""; // Clear the error before calculating again
    return;
  }
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
