const arr = [13,232,2435] //type of array is object
console.log(arr) 
console.log(typeof arr)
const arr2 = new Array("Shaktiman","Flying Jatt","Krrish","Ra.One","G.one") // declaring arrays as an object
console.log(arr2)
console.log(typeof arr2)

  //++++++++++++++++++++++++Array Methods++++++++++++++++++++++++++++++


  arr.push(78)
  console.log(arr)
  arr.pop()  //removes the element that was pushed at last
  arr.unshift(23)
  arr.unshift(32) //insersts the element from the front side of the array
  arr.shift()
  arr.shift() //removes the unshifted element from the array
  console.log(arr)
  console.log(arr.includes(13)) // tells that whether an element exist in an array

  const newArr = arr.join() //this will result into a string 
  console.log(arr)
  console.log(newArr)
  console.log(typeof newArr)

// Splice function is used to take a section of the array.
  