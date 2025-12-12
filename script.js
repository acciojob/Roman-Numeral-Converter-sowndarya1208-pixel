// Define the Roman numeral symbols and their corresponding integer values
  function convertToRoman(num) {
  // Define the Roman numeral symbols and their corresponding integer values.
  // The order is critical for the greedy algorithm used below.
  const romanNumerals = [
    ['M', 1000],
    ['CM', 900], // Subtractive rule for 900
    ['D', 500],
    ['CD', 400], // Subtractive rule for 400
    ['C', 100],
    ['XC', 90],  // Subtractive rule for 90
    ['L', 50],
    ['XL', 40],  // Subtractive rule for 40
    ['X', 10],
    ['IX', 9],   // Subtractive rule for 9
    ['V', 5],
    ['IV', 4],   // Subtractive rule for 4
    ['I', 1]
  ];

  if (num === 0) {
      return ""; // The number 0 has no Roman numeral representation
  }

  let result = '';

  for (let i = 0; i < romanNumerals.length; i++) {
    const symbol = romanNumerals[i][0];
    const value = romanNumerals[i][1];

    // While the number is greater than or equal to the current value,
    // append the symbol to the result and subtract the value from the number.
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

// Example Usage:
console.log(`14 -> ${convertToRoman(14)}`);