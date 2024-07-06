// Objects can be constructed using two methods either as a literal or as a constructor

//Object literals
const mySym = Symbol("Key1") //we have to first define the symbol in order to use it in defining the object literal.
const jsUser = {
    name: "Absaar",
    age:18,
    [mySym]: "myKey1",
    location:"Kolkata",
    email: "imabsaar@gmail.com",
    isLoggedin: false,
    LastLoggedin : ["Monday","Thursday"]
} //All the definitions are processed as a string 

console.log(jsUser.email)
console.log(jsUser["email"]) //Another Way to Access Information
console.log(jsUser.mySym) // it is of string data type but we have to operate it as a symbol
console.log(jsUser[mySym])

jsUser.email = "imabsaar007@gmail.com"
// Object.freeze(jsUser) // used to freeze all the information no edits can be made after using this command
jsUser.email = "imabsaar.yahoo.in"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello Js user")
}
jsUser.greeting2 = function()
{
    console.log(`Hello Js User ,${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greeting2())