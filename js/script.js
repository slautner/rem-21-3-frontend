import {add, arrowAddFull, arrowAddShort} from "./math";

const functionAdd = add(3, 2);
console.log(`Functional: ${functionAdd}`);

// ---

console.log(`Full: ${arrowAddFull(5, 5)}`);
console.log(`Short: ${arrowAddShort(3, 5)}`);

// ---

const factorialWhile = (factor) => {
    let i = 1;
    let result = 1;
    while (i < factor) {
        i++;
        result *= i;
    }
    return result;
}
console.log(`Factorial of 0 = ${factorialWhile(0)}`);
console.log(`Factorial of 3 = ${factorialWhile(3)}`);
console.log(`Factorial of 4 = ${factorialWhile(4)}`);

const factorial = n => (n === 0 ? 1 : n * factorial(n - 1))
console.log(`Factorial of 0 = ${factorial(0)}`);
console.log(`Factorial of 3 = ${factorial(3)}`);
console.log(`Factorial of 4 = ${factorial(4)}`);
