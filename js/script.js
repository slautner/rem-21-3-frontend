import {add, arrowAddFull, arrowAddShort} from "./math";
import {renameImmutableIndex, renameImmutableMap, renameMutable} from "./students";

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

// ---

const studentKlaus = {
    id: "1",
    name: "Klaus"
}
const studentMarie = {
    id: "2",
    name: "Marie"
}
const students = [studentKlaus, studentMarie]

console.log(`Origin array: ${JSON.stringify(students)}`)

console.log(`ImmutableIndex changed: ${JSON.stringify(renameImmutableIndex(students, "Klaus", "Bernd"))}`)
console.log(`Origin array: ${JSON.stringify(students)}`)

console.log(`ImmutableMap changed: ${JSON.stringify(renameImmutableMap(students, "Klaus", "Bernd"))}`)
console.log(`Origin array: ${JSON.stringify(students)}`)

console.log(`Mutable changed: ${JSON.stringify(renameMutable(students, "Klaus", "Bernd"))}`)
console.log(`Modified (origin) array: ${JSON.stringify(students)}`)
