# Temperature Converter

Create a function called convertTemperature that takes two parameters:

1. A number representing a temperature
2. A string representing the current unit ('C' for Celsius or 'F' for Fahrenheit)

The function should convert the temperature to the opposite unit and return an object containing both the converted temperature (rounded to one decimal place) and the new unit. If an invalid unit is provided, return null.

Example:

```js
convertTemperature(25, 'C') // should return { temperature: 77.0, unit: 'F' }
convertTemperature(86, 'F') // should return { temperature: 30.0, unit: 'C' }
```

## Learning Objectives:

1. Working with function parameters of different types
2. Performing arithmetic operations and rounding numbers
3. Using conditional statements and return values
