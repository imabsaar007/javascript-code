let date = new Date()
console.log(date) //Weird looking date and time
console.log(date.toString()) // day date and time
console.log(date.toDateString()) //day date
console.log(date.toLocaleString()) //date and time
console.log(date.toLocaleDateString()) //date
console.log(typeof date) //date is a object data type

let createDate = new Date(2024,6,4)
let anotherDate = new Date("2024-12-25")
let Date1 = new Date("01-11-2024") //mm/dd/yyyy
console.log(createDate.toDateString())
console.log(anotherDate.toDateString())
console.log(Date1.toLocaleString())