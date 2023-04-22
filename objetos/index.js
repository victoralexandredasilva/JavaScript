const person = {
    firstName: 'Victor',
    lastName: 'Silva',
    age: 17,
    hobbies: ['Estudar','Escutar Musica', 'Jogar', 'Ver Novela'],
    pet: {
        espécie: 'Cachorro',
        nome: 'Fred',
        idade: 5,
        cor: 'Preto',
        raça: 'Rotvailler'
    }
}

// const firstName = person.firstName
// const lastName = person.lastName 
// const age = person.age


//Simplificando as variaveis acima por objeto
const {
    age, 
    firstName,
    hobbies,
    lastName,
    pet
} = person
const study = person.hobbies[0]

const {
    espécie, 
    nome, 
    idade, 
    raça, 
    cor
} = person.pet


console.log(`Meu nome é ${firstName} ${lastName} tenho ${age} anos, e o hobbie que eu mais faço no meu dia é ${study}, tenho um ${espécie} da raça ${raça}, ele é ${cor}, tem ${idade} anos de idade, e se chama ${nome}.`)