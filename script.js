// Complete the function in script.js

function convertToRoman(num) {
  // Use the symbols map provided in the prompt for consistency
  const romanNumeralsMap = [
    ['M', 1000],
    ['CM', 900], 
    ['D', 500],
    ['CD', 400], 
    ['C', 100],
    ['XC', 90],  
    ['L', 50],
    ['XL', 40],  
    ['X', 10],
    ['IX', 9],   
    ['V', 5],
    ['IV', 4],   
    ['I', 1]
  ];

  if (num === 0) {
      return "";
  }

  let result = '';

  for (let i = 0; i < romanNumeralsMap.length; i++) {
    const symbol = romanNumeralsMap[i][0];
    const value = romanNumeralsMap[i][1];

    // Keep subtracting the value and adding the symbol as long as num is larger
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

// Do not change the code below this line
window.convertToRoman = convertToRoman;
