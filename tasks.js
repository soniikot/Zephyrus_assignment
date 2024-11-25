/*Task 1: Reverse String (JavaScript)

Write a JavaScript function that takes a string as input and returns the string reversed.

Example:  
Input: `"hello"`  
Output: `"olleh"`
*/

//function reverseString splits string into array then reverse it and then join it back into the string.
//p.s in JavaScript you can not reverse string directly.

function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log("Task 1: results:", reverseString("hello"));

/*Write a JavaScript function that prints numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, 
and for multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

Example Output:  
```
1  
2  
Fizz  
4  
Buzz  
Fizz  
7  
8  
Fizz  
Buzz  
…
*/

//I used for loop to print numbers from 1 to 100, then I create conditions to print FizzBuzz which check the reminder after diving number by 3 and 5
//as well I used logical operator and (&&) for checking for two conditions
function fizzBuzz() {
  for (let i = 1; i < 101; i++)
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
}

console.log("Task 2: results");
fizzBuzz();

/*Task 3: Even or Odd (JavaScript)

Write a JavaScript function that accepts an integer and returns whether it is even or odd*.

Example:  
Input: `3`  
Output: `"Odd"`

Input: `8`  
Output: `"Even"`
*/

//I used reminder operator (%) to check if number can be divided by 2 and then I used return statement to print results
//To test this function I created two variables and then embedded it into result statement.

function evenOrOdd(int) {
  if (int % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

const oddNumber = 5;
const evenNumber = 10;

console.log(`Task 3: results for ${oddNumber}:`, evenOrOdd(oddNumber));
console.log(`Task 3: results for ${evenNumber}:`, evenOrOdd(evenNumber));
