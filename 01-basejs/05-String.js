 const name = "harsh"
 const repocount = 50

 console.log(name + repocount + "value");

 console.log(`${name} has ${repocount} repos`)//called string interpolation

 const gameName = new String("Modern-Warfare")

 console.log(gameName.__proto__)

 console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(9))
console.log(gameName.indexOf("War"))

const newString = gameName.substring(0,6)

console.log(newString)

const anotherString = gameName.slice(3,6)
console.log(anotherString)

const NewString = "   hello harsh   "
console.log(NewString)
console.log(NewString.trim())
console.log("\n");

const url = "https://www.google.com/harsh golem"

url.replace(" ","-")
console.log(url.replace(" ","-"))

console.log(url.includes("harsh"))

console.log(url.split("/"))