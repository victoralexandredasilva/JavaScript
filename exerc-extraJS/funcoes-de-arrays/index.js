//metodos array//

//MAP//


/*Criar uma array com números e retornar uma lista com os numeros multiplicados por 5+*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8 , 9 , 10]

let multipliedBytwo = numbers.map((number) => number * 5) //modo arrow function

console.log(`Os números da array original são:${numbers}`)
console.log(`Os números da array multiplicada por 5 são: ${multipliedBytwo}`)

//FILTER//

/*Criar uma array com idades e filtrar somente as idades com numeros pares*/

const age = [ 12, 6, 4, 7, 8, 25, 67]

const evenAge = age.filter(function(age) {
    return age % 2 == 0
})

console.log(`As idades encontradas que são números pares são:${evenAge}`) //modo function normal 

//REDUCE//

// somar o valor de todas as idades 

const sumOfAges = age.reduce((age, accumulator) => {
    return accumulator + age 
},0)

console.log(`A soma de todas as idades é igual a ${sumOfAges}`)
