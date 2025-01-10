/* 
After gaining a solid understanding of arrays, loops, and if-else statements, I am practicing by creating various tasks to enhance my skills. I plan to write code for a palindrome checker, FizzBuzz, a prime number finder, a number pattern generator, a program to calculate the sum of even or odd numbers, and more. */


// 1- Write a program that checks if a given string or word is a palindrome (a word that reads the same forwards and backwards). Ignore spaces and case sensitivity.

let userResponse = "madam"

userResponse = userResponse.toLowerCase()
let filteredResponse = userResponse.split(" ").join("")
let isPalindrome = false
for (let i = 0; i < filteredResponse.length; i++) {
    if(filteredResponse[i] !== filteredResponse[filteredResponse.length - 1 - i]){
        isPalindrome = false
        break
    }
    isPalindrome = true
        
}
console.log(isPalindrome);
