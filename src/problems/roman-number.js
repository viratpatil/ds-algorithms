// 13. Roman to Integer
// Easy

// 2560

// 176

// Add to List

// Share
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

export const romanToNumber = (str) => {
    const romanMap = new Map([
        ['I', 1], ['V', 5], ['L', 50], ['D', 500], ['X', 10], ['C', 100], ['M', 1000]
    ]);

    let value = 0;
    for (let i = 0 ; i < str.length; i++) {
        const curr = romanMap.get(str.charAt(i));
        const next = romanMap.get(str.charAt(i + 1))

        console.log('curr', curr);
        console.log('next', next);
        
        if ( curr < next) {
            value -= romanMap.get(str.charAt(i))
        } else {
            value += romanMap.get(str.charAt(i))     
        }

        console.log('value', value);
    }

    return value;

}