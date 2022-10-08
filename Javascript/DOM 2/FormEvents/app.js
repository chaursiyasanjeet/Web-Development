const form = document.querySelector("#sanjeet");
const input = document.querySelector("#catname");
const list = document.querySelector("#cats");

form.addEventListener("submit", function (e) {
    e.preventDefault();//this will not redirect to other pages
    console.log(input.value);
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    list.append(newLI);
    input.value = "";
});

