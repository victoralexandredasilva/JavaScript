function parimpar(n) {
    if(n%2 == 0) {
        return `O número ${n} é Par!`
    } else {
        return `O número ${n} é ímpar!`
    }
}

console.log(parimpar(83983082))


function verificarIdade(n) {
    if(n < 18 ) {
        return 'Você é menor de idade!'
    } else {
        return 'Você é maior de idade!'
    }
}

console.log(verificarIdade(12))
