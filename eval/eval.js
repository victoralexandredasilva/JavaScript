//O eval é basicamente uma função que é capaz de executar operações matematicas através de uma string



//Sem o eval()
const n1 = '4'
const n2 = '5'
const sum = n1 + n2 // 45 
console.log(sum) // Usando dessa maneira o javascript apenas concatena 2 strings, nao considerando os valores como numeros


//Com o eval()
const calc = '1 + 5 - 3 * 5 - 3' // -12 
console.log('O resultado da operação é:',eval(calc)) // Já o eval() consideraa esses valores dentro da string, e executa as operações

