// Get references to the buttons and the results div
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const resultsDiv = document.querySelector(".results");

// Add event listeners to both buttons
yesButton.addEventListener("click", () => {
  resultsDiv.textContent = "Give her a job!";
});

noButton.addEventListener("click", () => {
  resultsDiv.textContent = "Explain why she is not ready for this job yet.";
});
