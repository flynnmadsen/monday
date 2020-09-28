
// deklarerar en funktion såhär
// function addThreeNumbers(x, y, z) {
//     const sum = x + y + z

//     return sum
// }

// // anropar (kallar på) en funktion såhär
// const result = addThreeNumbers(4, 7, 2)

// console.log(result)

// function spamPerson(name) {
//     let count = 0
//     while (count < 8) {
//         alert("hellooo " + name)
//         count = count + 1
//     }
// }

// spamPerson("Flynn")

// function isEinar(name) {
//     return name.tolowercase === "einar" 
// }

// console.log(isEinar("EiNar"))

// object är en datatyp som används för att beskriva
// mer komplicerade grejer

// vi använder måsvingar för att skapa object
const person1 = {
    name: "Aragon",
    age: 39,
    vegan: false
}

// vi använder punkt för att accessa properties
console.log(person1.name)

// vi kan också sätta properties. vi muterar objektet
person1.age = 40
console.log(person1)

