const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve("yor fake data here");
            }
            reject("request error!!!")
        }, 1000)
    })
}

fakeRequest("/dogs/1")
    .then((data) => {
        console.log("request done")
        console.log("data id: ", data)
    })
    .catch((err) => {
        console.log("OH NO ", err)
    })


//color change 
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange("red", 1000)
    .then(() => delayedColorChange("orange", 1000))
    .then(() => delayedColorChange("purple", 1000))
    .then(() => delayedColorChange("green", 1000))
    .then(() => delayedColorChange("yellow", 1000))
    .then(() => delayedColorChange("pink", 1000))

