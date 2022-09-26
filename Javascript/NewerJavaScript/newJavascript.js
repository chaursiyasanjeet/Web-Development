//Deafault params

//this will be dafault 6 if you will not give input
function rollDie(num = 6) {
    return Math.floor(Math.random() * num) + 1;
}

//Spread in function calls
const nums = [21, 3444, 34675, 23, 64, 1565, 2456, 145];
Math.max(nums);
console.log(...nums);//This will print all array elements

//spread with Array Literals
const cats = ['blue', 'scout', 'rocket'];
const dogs = ['rusty', 'wyatt'];
//combining both the arrays
const allPets = [...cats, ...dogs];

//spread with objects
const feline = { legs: 4, family: 'Felidate' };
const canine = { isFurry: true, family: 'Caninae' };
//combinig objects
const Catdg = { ...feline, ...canine }
//here in both object the family is present so whch is in last will be include.

//Rest-look like spread but it totaly different
function sum(...nums) {
    return nums.reduce((total, el) => total + el);
}

//here first two specific and rest is generlise
function raceResults(gold, silver, ...everyOneElse) {
    console.log(`GOLD GOES TO: ${gold}`);
    console.log(`SIlVER GOES TO: ${silver}`);
    console.log(`AND THANKS TO: ${everyOneElse}`);
}

//Destructuring arrays
const scores = [23804, 1230940, 238049, 2190, 09123890, 12332]

const highScore = scores[0];
const secondhighScore = scores[1];
//shortcut by destructuring
const [gold, silver, ...everyoneElse] = scores;//it will take element form starting
//everyone will contain rest of the scores

//DESTRUCTURING OBJECTS
const user = {
    email: 'something@gmail.com',
    password: 'sdfjkfl',
    firstName: 'Sanjeet',
    lastName: 'Kumar',
    city: 'motihari',
    born: 400,

}
//we are making new variable of firstname last name and we can call directly

const { email, firstName, lastName } = user;
console.log(firstName);

//this will store born in another variable 
const { born: birthYear, died = 'deafult value' } = user;

//Destructuring function
function fullName(user) {
    //return `${user.firstName} ${user.lastName}`

    //using destructuring
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
}

//you cna also use like this
function fullNaam({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}