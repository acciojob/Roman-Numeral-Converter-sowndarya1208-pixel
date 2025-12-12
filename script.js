function convertToRoman(num) {
    if (num === 0) return "";

    const symbols = [
        ['M',1000], 
        ['D', 500], 
        ['C', 100], 
        ['L', 50], 
        ['X', 10], 
        ['V', 5], 
        ['I', 1]
    ];

    let result = "";

    for (let i = 0; i < symbols.length; i++) {
        let roman = symbols[i][0];
        let value = symbols[i][1];

        // Handle subtractive cases (IV, IX, XL, XC, CD, CM)
        if (i < symbols.length - 1) {
            let nextValue = symbols[i + 1][1];
            let subtractiveValue = value - nextValue;

            // Match valid subtractive pairs
            if (
                (subtractiveValue === 900 && roman === 'M') ||
                (subtractiveValue === 400 && roman === 'D') ||
                (subtractiveValue === 90  && roman === 'C') ||
                (subtractiveValue === 40  && roman === 'L') ||
                (subtractiveValue === 9   && roman === 'X') ||
                (subtractiveValue === 4   && roman === 'V')
            ) {
                if (num >= subtractiveValue) {
                    result += symbols[i + 1][0] + roman; // example: C + M = CM
                    num -= subtractiveValue;
                }
            }
        }

        // Normal conversion logic
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }

    return result;
}

module.exports = convertToRoman;
