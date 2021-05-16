// const people = ['apple', 'monster', 'lala', 'oppa']
// const exitPeople = []

// for (let i = 0; i < people.length; i++) {
//   exitPeople[i] = people[i] + ' fuckem'
// }

// console.log(exitPeople[1], exitPeople[0])

// const peoples = ['Amanda', 'Farrin', 'Geoff', 'Karen', 'Richard', 'Tyler']
// const excitedPeople = people.map((name) => name + '!')

// console.log(excitedPeople)

// function getClothing(isCold) {
//   if (isCold) {
//     var freezing = 'Grab a jacket!'
//   } else {
//     var hot = 'It’s a shorts kind of day.'
//     console.log(freezing)
//   }
// }

// function getClothing(isCold) {
//   if (isCold) {
//     let freezing = 'Grab a jacket!'
//     console.log(freezing)
//   } else {
//     let hot = 'It’s a shorts kind of day.'
//   }
// }

// function getClothing(isCold) {
//   if (isCold) {
//     const freezing = 'Grab a jacket!'
//   } else {
//     const hot = 'It’s a shorts kind of day.'
//     console.log(freezing)
//   }
// }

// getClothing(false)

// const myName = 'Mike'
// const greeting = `Hello, my name
// is ${myName}`
// // console.log(greeting)

// const arr = ['Mellow', 'Kariz', 'Stank']

// const x = arr[0]
// const y = arr[1]
// const z = arr[2]

// console.log(
//   `when it is time to be ${x} I meet with ${y} but we leave ${z} behind`
// )

// const obj = {
//   name: 'Stinky',
//   age: 66,
//   color: 'red',
// }

// const a = obj.name
// const b = obj.age
// const c = obj.color

// console.log(
//   `Hello my name is ${a} and in 20 years I will be ${b} old and I will wear some shiny ${c} shoes`
// )

// const colors = ['red', 'brown', 'grey']

// const [m, n, p] = colors

// console.log(
//   `My favorite color is ${m} but I also like ${n} but not so much ${p}`
// )

// let positions = ['Gabrielle', 'Jarrod', 'Kate', 'Fernando', 'Mike', 'Walter']
// let [first, second, third] = positions

// console.log(second)

// const lol = {
//   one: 'haha',
//   two: 'hehe',
//   three: 'grrrr',
// }

// const { one, two, three } = lol

// console.log(two)

// const circle = {
//   radius: 10,
//   color: 'orange',
//   getArea: function () {
//     return Math.PI * this.radius * this.radius
//   },
//   getCircumference: function () {
//     return 2 * Math.PI * this.radius
//   },
// }

// let { radius, getArea, getCircumference } = circle

// console.log(getCircumference)

const things = [
  'red',
  'basketball',
  'paperclip',
  'green',
  'computer',
  'earth',
  'udacity',
  'blue',
  'dogs',
]

const one = things
const two = ''
const three = ''

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`

console.log(colors)

let cat = 'meow'
let dog = 'ruf'
let leash = 'yellow'

let dogWear = { cat, dog, leash }

console.log(dogWear)

const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < num1.length; i++) {
  console.log(`the number is: ${num1[i]}`)
}

const letters1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

for (let i = 0; i < letters1.length; i++) {
  console.log(`the letter is ${letters1[i]}`)
}

const num2 = [23, 34, 35, 5, 3, 5, 6, 99]

for (const zibo in num2) {
  console.log(num2[zibo])
}

const num3s = [45, 6, 7, 8, 3, 5, 66]
for (const num3 of num3s) {
  if (num3 % 3 === 0) continue
  console.log(`${num3} is divisible by 5`)
}

const days = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
]

for (const day of days) {
  var upperDay = day.toUpperCase()
  console.log(upperDay)
}

const books = [
  'Don Quixote',
  'The Hobbit',
  'Alice in Wonderland',
  'Tale of Two Cities',
]
console.log(...books)
console.log(books)

const fruits = ['apples', 'bananas', 'pears']
const vegetables = ['corn', 'potatoes', 'carrots']

// const produce = [...fruits, ...vegetables]

console.log(...[...fruits, ...vegetables])

const moe = ['Mohamed', 'Mahamma', 'Moz', 'Mickey']
const zia = ['Zazzle', 'Zu', 'Zazu', 'Zooz']
const cuteNames = [...moe, ...zia]
console.log(...cuteNames)

const names = ['Karen', 'Richard', 'Tyler']

const nameLengths = names.map((name) => name.length)

console.log(nameLengths)

const maths = [1, 5, 6]
const mathTotal = maths.map((math) => math * 2)
console.log(mathTotal)

const words = ['car', 'vehicle', 'rocket']
const addLetter = words.map((word) => word + 's')
console.log(addLetter)
