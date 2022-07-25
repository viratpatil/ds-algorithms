// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string?

const isPalindrome = (num) => {
    let last_digit;
    let reversed;
    let palidromNumber = num;
    if (palidromNumber < 0) return false;
    while(palidromNumber !=0) {
        last_digit = palidromNumber % 10;
        reversed = reversed*10 + last_digit
        palidromNumber = Math.floor(palidromNumber/10);
    }

    return reversed === num;
}


// # Create three variables last_digit = number % 10 , reversedNumber = reversed**10 + lastdigit, palidromeNumber = palindrome/10 (remove the last digit using math.floor)
























































function isPalin(number) {
    let last_digit;
    let palindromeN = number;
    let reverse;

    while (palindromeN > 0) {
        last_digit = palindromeN % 10;
        reverse = reverse*10 + last_digit;
        palindromeN = Math.floor(palindromeN / 10);
    }

    return reverse === number;
}