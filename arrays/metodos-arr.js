// METÓDOS DE ARRAYS

const arr = [ 81, 82, 63, 24, 85, 66, 57, 38, 49, 50 ]
const arr2 = [ 45, 32, 54, 65, 98, 23]


//concat() = mescla 2+ arrays
const arrConcat = arr.concat(arr2) // [81, 82, 63, 24, 85, 66,57, 38, 49, 50, 45, 32,54, 65, 98, 23]
console.log(arrConcat)

//join

const arrJoin = arr.join()
console.log( typeof arrJoin) // 'arr' -> transforma os elementos de uma array em string

//slice
const arrSlice = arr.slice(2) // Faz uma copia da array original a partir do indice 2 '(63)'
console.log(arrSlice) // [24, ...]

const arrNewSlice = arr.slice(-3, -1) // Faz uma copia do array contando a partir do ultimo elemento
console.log('Novo slice', arrNewSlice) // [38, 49]