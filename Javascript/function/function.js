/*//Function

//Defining function
function singSong() {
    console.log("kya");
    console.log("Dil");
    console.log("ne");
    console.log("kaha");

}

//calling function
singSong();

//Arguments->function that accept inputs
function hi(personName) {
    console.log(`Hi! ${personName}`);

}



//Function with multiple arguments
//Seprated by comma and should be in correct order
function greet(firstName, lastName) {
    console.log(`Hi there,${firstName} ${lastName}`)
    console.log(`Hi there,${firstName} ${lastName[0]}`)//to get some specific part from input like here taking first letter of last name.
}
greet("sanjeet", "kumar")



//repeating something in function
function repeat(str, numTimes) {
    let result = " "
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}
repeat("$", 5);



//returning from function
function add(nums1, nums2) {
    let Total = nums1 + nums2;
    return Total;
    //after return code stop  the execution of function i.e will break;
    //we can return only one time

}


//
for (var i = 0; i < 5; i++) {//var creates a global varibal and can be access out of the function also
    var msg = "jj";
    console.log(msg);
}
console.log(i);
console.log(msg);

//function expression->function without name
const add1 = function (x, y) {
    return x + y;
};

//Higher order function
function calltwice(func) {
    func();
    func();
}//passing function as argument
function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

//returning a function
function lottery() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS,YOU ARE WINNER")
        }

    }
    else {
        return function () {
            alert("YOU HAVE INFECTED FROM VIRUS")
            alert("YOU HAVE INFECTED FROM VIRUS")
            alert("YOU HAVE INFECTED FROM VIRUS")
            alert("YOU HAVE INFECTED FROM VIRUS")
            alert("YOU HAVE INFECTED FROM VIRUS")
            alert("YOU HAVE INFECTED FROM VIRUS")
        }
    }
}

//checking the no. between will return true or false  
//function isBetween(num) {
// return num >= 50 && num <= 100
//}

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}
let minor = makeBetweenFunc(0, 18);//this will return a fuction of num between )0 &18
minor(39);//when you call it will return false because this is out of range
//this will return a function of between two numbers

//definig methods
const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },

    //shortcut
    cube(num) {//ypu have to not write function 
        return num ** 3;
    }

}


//This keyword
const cat = {
    name: "steele",
    color: "grey",
    breed: "sccottish fold",
    meow() {
        console.log(`${this.name} says MEOWWW`)
    }
}

const meow2 = cat.meow;//This will not print cat object it just refer 2 meow


//Try and catch
//like if code doesn't work then the javascript can catch

//if you wil use this then after some error your code will run contuiusly but without this you code will be not executed after error line
try {
    hello.toUpperCase();
} catch {
    console.log("Error!!!!!!")
}*/