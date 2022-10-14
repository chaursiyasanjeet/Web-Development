//automatically return new promise

//async function hello() {
//
//}

const sing = async () => {
    throw "oh no,problem!"
    return "aaaa"
}

sing()
    .then((data) => {
        console.log("Promise resolved data: ", data)
    })
    .catch((err) => {
        console.log("OH NO,Promise rejcted")
        console.log(err)
    })

const login = async (username, password) => {
    if (!username || !password) throw "Missing Credentials"
    if (password === "auiaoiior") return "WELCOME!!"
    throw "Invalid Passowrd"
}

//////////////////////////////////////////////////
login("sanjeet", "auiaoiior")
    .then((data) => {
        console.log("Logged in!!")
        console.log(data)
    })
    .catch((err) => {
        console.log("Error")
        console.log(err)
    })