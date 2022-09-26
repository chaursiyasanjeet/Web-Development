//setTimeout->after giving time the function will execute
console.log("HELLO!!!..")
setTimeout(() => {
    console.log("...are you still there?")
}, 3000)//this will execute after 3s

//this will run immediately
console.log("GOODBYE!!")

//setInterval->Excute the code after every time interval
const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

//filter method-when the conditio is true then then the array element will be added to filtered array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

//in this no. less than 10 will be stored in different array.
const filter = numbers.filter(n => {
    return n < 10
})

//some/every->return boolean
//Every-each elelmnt should passed
//Some-some element has passed or not

//reduce
//iterate thorugh each elemnt of array and return a single element
const prices = [9.99, 1.90, 14.57, 12.77, 132.77, 13.67];
const total = prices.reduce((total, eachPrice) => {
    return total + eachPrice;
})

const minmPrice = prices.reduce((min, currentPrice) => {
    if (currentPrice < min) {
        return currentPrice
    }
    else {
        return min
    }
})

function raceResults(gold, silver, ...everyOneElse) {
    console.log(`GOLD GOES TO: ${gold}`);
    console.log(`SIlVER GOES TO: ${silver}`);
    console.log(`AND THANKS TO: ${everyOneElse}`);
}