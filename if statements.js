function checkNumber(number) {
  if (number > 0) {
      return `${number} is positive.`;
  } else if (number < 0) {
      return `${number} is negative.`;
  } else {
      return `${number} is zero.`;
  }
}

function displayResult() {
  const inputNumber = document.getElementById('number').value;
  const result = checkNumber(Number(inputNumber));
  document.getElementById('output').textContent = result;
}