class Person {
    constructor(nome, idade, cidade) {
        this.nome = nome
        this.idade = idade
        this.cidade = cidade
    }

    speak() {
        return 'Olá Mundo!'
    }
}

const firstPerson = new Person('Victor', 17, 'Cascavel')
console.log(firstPerson.nome, 'disse', firstPerson.speak())