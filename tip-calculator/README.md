# Tip Calculator

Create a function called `calculateTip` that calculates the tip for a restaurant bill. The function should take two parameters:

  1. A number representing the total bill amount
  2. A string representing the quality of service ('poor', 'good', or 'excellent')
  
The function should return the tip amount rounded to two decimal places, based on the following criteria:

* For 'poor' service: 10% tip
* For 'good' service: 15% tip
* For 'excellent' service: 20% tip

If an invalid service quality is provided, the function should return `"Invalid service quality"`.

Example:

```js
calculateTip(50, 'good') // should return 7.50
calculateTip(100, 'excellent') // should return 20.00
```

## Learning Objectives

* Practice using conditional statements (if/else)
* Apply basic mathematical operations in JavaScript
* Utilize the `toFixed()` method for rounding numbers
