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

        // subtraction check (look ahead)
        if (i < symbols.length - 1) {
            let nextValue = symbols[i + 1][1];
            let subtractive = value - nextValue;

            // If subtractive case matches, append like CM, CD, XC, etc.
            if (num >= subtractive && subtractive !== value) {
                if (
                    (roman === 'M' && subtractive === 900) ||
                    (roman === 'D' && subtractive === 400) ||
                    (roman === 'C' && subtractive === 90) ||
                    (roman === 'L' && subtractive === 40) ||
                    (roman === 'X' && subtractive === 9) ||
                    (roman === 'V' && subtractive === 4)
                ) {
                    result += symbols[i + 1][0] + roman;
                    num -= subtractive;
                }
            }
        }

        // normal case
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }

    return result;
}
