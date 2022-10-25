/*
const req = new XMLHttpRequest();

req.onload = function () {
    console.log("IT LOADED!!");
    const data = JSON.parse(this.responseText);
    console.log(data.name, data.height);
}
req.onerror = function () {
    console.log("ERROR!!");
    console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/1");
req.send();
*/

//Easiest way of making api request
/*
fetch("https://swapi.dev/api/people/1")//return a promise
    .then((res) => {
        console.log("RESOLVED!", res)
        //res.json().then((data) => {
        //console.log("JSON DONE", data)
        return res.json();
    })
    .then((data) => {
        console.log(data);
        return fetch("https://swapi.dev/api/people/2/")
    })
    .then((res) => {
        console.log("SECOND REQUEST RESOLVED!!", res)
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log("ERROR!", e);
    })
    */

/*
//using async
const peopleData = async () => {
try {
    const res = await fetch("https://swapi.dev/api/people/1")
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/2/")
    const data2 = await res2.json();
    console.log(data2);
}
catch (e) {
    console.log("ERROR!!", e);
}
};

peopleData();
*/