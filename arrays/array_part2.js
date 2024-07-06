const marvel = ["Spiderman","Venom","Captain America","IronMan"]
const dc = ["Flash","Superman","Batman","Wonder Woman"]
marvel.push(dc) // it got pushed into the array as a whole 
console.log(marvel)
console.log(marvel[4]) // if we access marvel[4] whole dc array will be published on to the screen.
console.log(marvel[4][2]) // by this method we can access the rest of the elements of the pushed array

const all_heroes = marvel.concat(dc) // concat method is better way to merge two seperate arrays into one.
console.log(all_heroes)
console.log(all_heroes[6]) //from this method we can easily access each and every element

const everyone = [...marvel,...dc] // USED FOR SPREADING OUT VALUES
console.log(everyone)

const another_array = [12,3,4,6,[43,67,8,7],3,8,[67,88]]
const real_array = another_array.flat(Infinity) // method to merge multiple array into one simple array.
console.log(real_array)

console.log(Array.from("Absaar"))
console.log(Array.from({name: "Absaar"})) // Important Case will result in empty array because it is difficult to identity that for which entity array should be created is it for keys or for the values
 let s1 = 34
 let s2 = 23
 let s3 = 33
 console.log(Array.of(s1,s2,s3)) 