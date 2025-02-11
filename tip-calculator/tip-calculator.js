/**
 * Calculates the tip amount based on the bill amount and service quality.
 *
 * @param {number} billAmount - The total bill amount.
 * @param {string} serviceQuality - The quality of service ('poor', 'good', or 'excellent').
 * @returns {number|string} The calculated tip amount rounded to two decimal places,
 * or an error message for invalid service quality.
 */
function calculateTip(billAmount, serviceQuality) {
  if (serviceQuality === "poor") {
    return billAmount * 0.1;
  } else if (serviceQuality === "good") {
    return billAmount * 0.15;
  } else if (serviceQuality === "excellent") {
    return billAmount * 0.2;
  } else {
    return "Invalid service quality";
  }
}