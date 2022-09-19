//Function

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


