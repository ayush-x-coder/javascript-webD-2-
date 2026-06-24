function calculateSum() {
  const input = document.getElementById("nInput").value.trim();
  const resultEl = document.getElementById("result");

  const n = parseInt(input);

  if (input === "" || isNaN(n) || n < 1) {
    resultEl.textContent = "Please enter a valid positive number.";
    return;
  }

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  resultEl.textContent = "Sum from 1 to " + n + " = " + sum;
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("nInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") calculateSum();
  });
});