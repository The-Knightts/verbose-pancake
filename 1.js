// Assignment 2
// Question 1: Multiplication Table Generator

// Using this loop for creating the number of iteration, like how many tables to be created
for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){   // This loop is used for the multiplication variables
        console.log(i,'*', j, '=', i*j );   // Printing the tables
    }
    console.log()
}

// Question 2: Sum of Numbers in an Array

// Initialize the array inside '[]' and using let keyword
array = [10, 20, 30, 40, 50]

// Initialize the sum variable using let keyword
let sum = 0;

// Loop through each number in the array and add it to the sum
for (let num of array)
    sum += num;

// Printing the sum the one we calculated
console.log("The sum of the numbers in the array is:", sum);
console.log();

// Question 3: Palindrome Checker

// Defining the function Palindrome to check whether the string is palindrome or not by passing str as parameter
function Palindrome(str) {

    // Initialize two pointers: one at the beginning and one at the end of the string
    let left = 0; // This one at beginning
    let right = str.length - 1; // This one at the end of the string
  
    // Loop until the two pointers meet in the middle
    while (left < right) {
        if (str[left] !== str[right]) // Check if the characters at the two pointers are not the same
            return false; // If they are not the same, return false
  
        // Move the pointers towards the middle
        left++;
        right--;
    }

    // If the loop completes, it means the string is a palindrome
    return true;
}

console.log(Palindrome("LEVEL")); 
console.log(Palindrome("kuber")); 

// Question 4: Fibonacci Sequence Generator
const number = Number(prompt('Enter the number of terms: '));   // Using prompt for taking input the number

// Initializing the variables used for fibonacci
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

// Printing the Fibonacci Series
for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2; // Adding the previous two numbers 
    n1 = n2; // Assigning the n2 variable to n1 
    n2 = nextTerm;  // Assigning the nextTerm variable to n2
}

console.log()

// Question 5: Block Scope with Let and Const

// Global Declaration
let a =  15  
var name = 'Kuber'
const pi =  3.14

// Function Declaration
{
    //Local Declaration
    const pi = 3.14
    let b  = 20
    var names = 'Knights'
    console.log(a)
}
console.log(names) // Using Local variable, but it is declared using var keyword. So it becomes global. 
console.log(pi)    // Using Global Variable 
// It will give error, because the scope is local
console.log(b)