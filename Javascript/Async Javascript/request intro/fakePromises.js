//fakePromises

const fakeRequestPromise = (url) => {
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

/*
const request = fakeRequestPromise("books.com/api");
request
    .then(() => {
        //promise resolved
        console.log("It worked")
    })
    .catch(() => {
        //promise rejected
        console.log("OH NO,ERROR!!")
    })
*/

/*
fakeRequestPromise("books.com/page1")

    .then(() => {
        //promise resolved
        console.log("It worked")
        fakeRequestPromise("books.com/page2")
            .then(() => {
                console.log("It worked again")
                fakeRequestPromise("books.com/page3")
                    .then(() => {
                        console.log("Woohoo!! It worked 3rd time!!")
                    })
                    .catch(() => {
                        console.log("Failed at 3rd time !!")
                    })
            })
            .catch(() => {
                console.log("not worked 2nd time")
            })
    })

    .catch(() => {
        //promise rejected
        console.log("OH NO,ERROR!!")
    })
    */

//better syntax
fakeRequestPromise("books.com/page1")
    .then((data) => {
        console.log("It worked!!(page1)")
        console.log(data)
        return fakeRequestPromise("books.com/page2")
    })
    .then((data) => {
        console.log("It worked!!(page2)")
        console.log(data)
        return fakeRequestPromise("books.com/page3")
    })
    .then((data) => {
        console.log("It worked!!(page3)")
        console.log(data)
        return fakeRequestPromise("books.com/page4")
    })
    .then((data) => {
        console.log("It worked!!(page4)")
        console.log(data)
    })
    .catch((data) => {
        console.log("Error")
        console.log(data)
    })