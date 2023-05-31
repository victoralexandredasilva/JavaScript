const animal = {
    tipo: 'Animal',
    som: 'Um som de animal',

    emitirSom: function() {
        console.log(this.som)
    }
}

const dog = {
    tipo: 'Cachorro',
    som: 'latido...'     
}

Object.setPrototypeOf(dog, animal) // Ele busca uma propriedade no objeto pai, caso nao exista na propriedade filha;
dog.emitirSom() // Latido...

const badDog = {
    tipo: 'cachorroBravo',
    latirForte: function() {
        console.log(this.som.toUpperCase()) // Ele procura a propriedade do som que esta no objeto dog, e transforma em caixa alta pra demonstrar um latido forte 
    }
}

Object.setPrototypeOf(badDog, dog)
badDog.latirForte()
