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
console.log(person)

Person.speak()