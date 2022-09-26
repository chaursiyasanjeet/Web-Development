//For each->//accepts a callback function.
//calls the function once per element in the array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

/*function print(element) {
    console.log(element);
}
//this will pas all array element once in the print function
numbers.forEach(print);
*/

//this will also take array element once
numbers.forEach(function (el) {
    console.log(el);
})

//Map method->creates a new array with the results of calling a callback on every element in the array

//Map will execute this ans store in a new array
const doubleOfNum = numbers.map(function (num) {
    return num * 2;
})


//arrow function

//   const add = function (x, y) {
//    return x + y;
//     }

//you can define function like this using arrow.
const add1 = (x, y) => {
    return x + y;
}

const square = (x) => {
    return x * x;
}

//if there is no argument then just write open ans close bracket

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

//now we have to not use return when using small bracket it automatically understand
//in this only single value can be returned.
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
);

//the above can be done in one lin just giev argument and after arrow give return value
//in this only single value can be returned
const add2 = (a, b) => a + b;

