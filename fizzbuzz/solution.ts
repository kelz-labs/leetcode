/**
 * FizzBuzz is a childhood game that iterates over a range of numbers and uses simple logic to decide whether to say a "Fizz," "Buzz," or a number. Through this problem, you will learn to convert that logic into code, and you will be introduced to frequently used operations like modulo and string concatenation. We encourage you to try solving 412. Fizz Buzz on your own first, then return here to watch the video solution.
 */

let fizz: string = "fizz";
let buzz: string = "buzz";

const fizzbuzz = <T extends string>(fizz: T, buzz: T) => {
    for (let i = 1; i <= 100; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log(fizz + buzz);
        } else if (i % 3 === 0) {
            console.log(fizz);
        } else if (i % 5 === 0) {
            console.log(buzz);
        } else {
            console.log(i)
        }
    }
}

fizzbuzz(fizz, buzz)