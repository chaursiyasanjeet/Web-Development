document.querySelector("button").addEventListener("click", function (evt) {
    console.log(evt);
})

const input = document.querySelector("input");
input.addEventListener("keydown", function (e) {
    console.log(e.key)
    console.log(e.code)

})


//input.addEventListener("keyup", function () {
//  console.log("keyup")
//})

//this will detect on whole the screen
window.addEventListener("keydown", function (s) {

    //console.log(s.key);
    //console.log(s.code);

    switch (s.code) {
        case "ArrowUp":
            console.log("Up!!")
            break;
        case "ArrowDown":
            console.log("Down!!")
            break;
        default:
            console.log("IGNORED!")
    }
})