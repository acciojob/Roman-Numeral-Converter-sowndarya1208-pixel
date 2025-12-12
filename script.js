// Remove surrounding template comments/text and ensure only the function definition remains clean

function convertToRoman(num) {
  const romanNumerals = [
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

  for (let i = 0; i < romanNumerals.length; i++) {
    const symbol = romanNumerals[i][0];
    const value = romanNumerals[i][1]; // Use index 1 here

    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  console.log(result);
}

// Do not change the code below this line (usually required by these platforms)
window.convertToRoman = convertToRoman;
