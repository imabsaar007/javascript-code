const score = 4000
const balance = new Number(2832)
console.log(balance)
console.log(score)
console.log(balance.toString())
console.log(balance.toFixed(4))
const num1 = 123.343
console.log(num1.toPrecision(4))

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN')) //conversion into indian numbering system

      //++++++++++++++++++MATHS+++++++++++++++++++++++

console.log(Math)
console.log(Math.min(2,34,335,12)) // return minimum value among given no of numerical sequence
console.log(Math.round(4.7))  // Return Round off Value
console.log(Math.ceil(4/3))      //return ceil value
console.log(Math.random()) //Will always generate a value between 0 and 1

// Finding a number within a given range
const min = 10
const max = 20
console.log(Math.floor(Math.random() *(max-min +1))+min) //provides a number within a given range



