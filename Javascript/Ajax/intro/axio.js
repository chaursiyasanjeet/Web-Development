/*
//library used for fetching request
axios.get("https://swapi.dev/api/people/1")
    .then(res => {
        console.log("RESPONSE:", res)
    })
    .catch(e => {
        console.log("ERROR!!", e)
    })
    */


/*
//using async and axios
const people = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data)
    } catch (e) {
        console.log("ERROR", e);
    }
}
people(5);
people(10);
*/


//joke funcion
const jokes = document.querySelector("#jokes");
const getJoke = async () => {

    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get("https://icanhazdadjoke.com", config)
    console.log(res.data.joke);
    const newLI = document.createElement("LI");
    newLI.append(res.data.joke);
    jokes.append(newLI);
}


const button = document.querySelector("button");
button.addEventListener("click", () => {
    getJoke();
})




