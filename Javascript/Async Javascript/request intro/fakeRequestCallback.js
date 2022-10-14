/*
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure("connection Timeout:")
        }
        else {
            success(`here is your fake data from ${url}`)
        }
    }, delay)
}




//calling request
fakeRequestCallback("books.com/page1", (response) => {
    console.log("IT WORKED!!!")
    console.log(response)

    //nesting second callback
    fakeRequestCallback("books.com/page2", (response) => {
        console.log("IT WORKED AGAIN")
        console.log(response)

        //nesting third callback
        fakeRequestCallback("books.com/page3", (response) => {
            console.log("it worked third times!!", response)
        },
            (err) =>
                console.log("error (3rd request)", err))
    },
        (err) => {
            console.log("ERROR (2nd req)!!", err)
        })
}, () => console.log("ERROR!!"))
*/
