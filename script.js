function convertToRoman(num) {
  	 //your code here
	  if (typeof num !== 'number' || num <= 0 || num > 3999) {
    return 'Invalid input: Please enter a positive integer between 1 and 3999.';
  }

  // Define the Roman numeral symbols and their corresponding integer values
  const romanSymbols = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  let romanNumeral = '';

  // Iterate through the romanSymbols array
  for (let i = 0; i < romanSymbols.length; i++) {
    // While the input number is greater than or equal to the current symbol's value
    while (num >= romanSymbols[i].value) {
      // Append the symbol to the result string
      romanNumeral += romanSymbols[i].symbol;
      // Subtract the symbol's value from the input number
      num -= romanSymbols[i].value;
    }
  }
  return romanNumeral;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(14));




// do not edit below this line
module.exports = convertToRoman
