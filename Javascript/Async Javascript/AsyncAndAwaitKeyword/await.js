const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

async function rainbow() {
    await delayedColorChange("red", 1000)
    //wait for first to run
    await delayedColorChange("orange", 1000)
    await delayedColorChange("yellow", 1000)
    await delayedColorChange("green", 1000)
    await delayedColorChange("blue", 1000)
    await delayedColorChange("indigo", 1000)
    await delayedColorChange("violet", 1000)
    return "ALL DONE"

}

//rainbow().then(() => console.log("END OF RAINBOW!!",))

/*
async function pritRainbow() {
    await rainbow()
    console.log("End of rainbow!!")
}
*/

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject("Connection timeout")
            }
            else {
                resolve(`Here is your fake data fromr ${url}`)
            }
        }, delay)
    })
}

//handling error in Async function
async function makeRequest() {
    try {
        let data1 = await fakeRequest("/page1");
        console.log(data1);
        let data2 = await fakeRequest("/page2");
        console.log(data2);
    } catch (e) {
        console.log("Error")
        console.log("error is:", e)
    }
}