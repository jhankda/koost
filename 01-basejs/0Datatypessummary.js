// #primitive
// string,Number,boolean,null,undefined,symbol,BigInt

const id = Symbol("123")
const Anotherid  = Symbol("123")

console.log(id === Anotherid)

const bigNumber = 465321651261n



// #reference or nonprimitive
// array,objects,functions

const  obj= ["shaktiman", "naagraj" , "doga"]

let myObj = {
    name:"harsh",
    age:18,
}

const myfunc = function(){
    console.log("hello")
}




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack(primitive) ,Heap(reference/nonprimitive)




let firstWord = "harsh"
let secondWord = "comic"

secondWord = "Jhankda"

console.log(firstWord)
console.log(secondWord)
//change in secondWord will not affect firstWord as they are stored in different memory location (stack) and are primitive type




let user = {
    name:"harsh",
    age:18
}

let userTwo = user
userTwo.name = "Comic"
console.log(user)
console.log(userTwo)
//change in userTwo will affect user as they are stored in same memory location (heap) and are reference type