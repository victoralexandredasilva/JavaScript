const arr = [1, 2, [3, 4, [5, 6]]]
const arrFlat = arr.flat()
console.log('O primeiro flat é:', arrFlat)
const arrFlat2 = arrFlat.flat()
console.log('O segundo flat é: ', arrFlat2)


// O flat() basicamente funciona 'reformatando'  uma array, no exemplo acima,temos uma array com uma subarray, ou array secundaria, que tem tambem uma subarray, usando o metodo flat, ele faz com que a subarray faça parte da array principal