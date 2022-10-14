//call stack-last in first out

/*
console.log("Sending request to server")
setTimeout(() => {
    console.log("Here is your data from server...")
}, 3000)
console.log("I am at the end of the file")
*/



/*
setTimeout(() => {
    document.body.style.backgroundColor = "orange";
    setTimeout(() => {
        document.body.style.backgroundColor = "yellow";
        setTimeout(() => {
            document.body.style.backgroundColor = "red";
        }, 1000)
    }, 1000)
}, 1000)
*/


const delayColorChange = function (newColor, delay, doNext) {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    }, delay)
}

delayColorChange("pink", 1000, () => {
    delayColorChange("orange", 1000, () => {
        delayColorChange("green", 1000, () => {
            delayColorChange("blue", 1000, () => {
                delayColorChange("yellow", 1000, () => {

                })
            })
        })
    })
});


