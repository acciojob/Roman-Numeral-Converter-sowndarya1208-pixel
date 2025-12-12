// Complete the function in script.js

function convertToRoman(num) {
  // Input validation for the specified range (0 to 100000)
  if (num < 0 || num > 100000 || !Number.isInteger(num)) {
    return 'Input out of range or not an integer';
  }
  
  if (num === 0) {
      return ""; // 0 has no Roman numeral representation
  }

  // Lookup arrays for each place value (hundreds, tens, ones)
  const hundredsArr = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const tensArr = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const onesArr = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  
  // To handle numbers > 3999, we calculate the thousands part separately.
  // We use the remainder (%) operator to isolate hundreds, tens, and ones places.

  const thousandsPart = Math.floor(num / 1000);
  const hundredsPart = Math.floor((num % 1000) / 100);
  const tensPart = Math.floor((num % 100) / 10);
  const onesPart = num % 10;
  
  // Build the string:
  // 1. Add 'M' for every thousand (e.g., 4000 is MMMM, 100000 is 100 Ms)
  // 2. Use lookup arrays for hundreds, tens, and ones places
  
  let result = '';
  
  for (let i = 0; i < thousandsPart; i++) {
    result += 'M';
  }

  result += hundredsArr[hundredsPart];
  result += tensArr[tensPart];
  result += onesArr[onesPart];

  return result;
}
console.log(`14 -> ${convertToRoman(14)}`);     

// Do not change the code below this line
// This line makes the function accessible to the automated testing environment
window.convertToRoman = convertToRoman;
