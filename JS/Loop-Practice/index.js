// Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.


let sum = 0;

let i = 1;

while (i <= 5) {
    sum += i;
    i++;
}
console.log(sum);

// Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.

let countdown = []

let j = 1;
while (j <= 5) {
    countdown.push(j)
    j++
}
console.log(countdown);


// Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
//    Store each tea type in an array named `teaCollection`.

// Note: This Code is only work in Browser Because Of PROMPT. So, I just Comment it

// let teaCollection = [];
// let tea;

// do {
//     tea = prompt("What is your favorite tea type?");
//     tea = tea.toLowerCase();
//     if(tea !== "stop" ){
//         teaCollection.push(tea)
//     }
// } while (tea !== "stop");


// Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.

let total = 0;

let k = 1;

do {

    total += k;
    k++;

} while (k <= 3);

console.log(total);


// Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.

let multipliedNumbers = [];
let numbers = [2, 3, 4]

for (let i = 0; i < numbers.length; i++) {
    newNumber = numbers[i] * 2;
    multipliedNumbers.push(newNumber)
}

console.log(multipliedNumbers);
