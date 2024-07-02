let gameName = new String('imabsaar007') // Declaring String as an object
console.log(gameName[0]) // it stores as key value pair it means each alphabet has it's own index starting from 0
gameName[0] = "a" // we can't access elements or change it using index
console.log(gameName)
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('a')) //tells about the first apperance of the character in a string
const newString = gameName.substring(0,5) // fetches the substring from a given string from the given indices
console.log(newString) 
const name1 = new String("   Ashok   ")
const newer = name1.trim()  //remove extra spaces from the given string
console.log(newer)
console.log(name1)
const url = "www.imabsaar007%20aviero.co.in"
console.log(url.replace("%20","-"))// replaces a specific keyword from a given keyword
console.log(url)