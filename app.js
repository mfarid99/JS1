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
