const people = ['apple', 'monster', 'lala', 'oppa']
const exitPeople = []

for (let i = 0; i < people.length; i++) {
  exitPeople[i] = people[i] + ' fuckem'
}

console.log(exitPeople[1], exitPeople[0])

const peoples = ['Amanda', 'Farrin', 'Geoff', 'Karen', 'Richard', 'Tyler']
const excitedPeople = people.map((name) => name + '!')

console.log(excitedPeople)
