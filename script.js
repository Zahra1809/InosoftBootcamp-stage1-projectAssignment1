function toggleSign() {
    const display = document.getElementsByName("display")[0];
    if (display.value !== "") {
        if (display.value[0] === '-') {
            display.value = display.value.slice(1); // Remove existing '-'
        } else {
            display.value = '-' + display.value; // Add '-'
        }
    }
}
function calculatePercentage() {
  const display = document.getElementsByName("display")[0];
  if (display.value !== "") {
      const currentValue = parseFloat(display.value);
      const percentageValue = currentValue / 100;
      display.value = percentageValue;
  }
}
function calculate() {
  const display = document.getElementsByName("display")[0];
  try {
      display.value = eval(display.value);
  } catch (error) {
      display.value = "Error";
  }
}