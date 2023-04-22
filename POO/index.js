class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    static speak() {
        console.log('Hello World!')
    }
}

const person = new Person('Victor', 'Silva', 16)
const person2 = new Person ('Cleverson', 'Faville', 27)
console.log(person, person2)

Person.speak()