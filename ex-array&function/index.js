const btnAdicionar = document.querySelector('button.btnAdicionar')
btnAdicionar.addEventListener('click', adicionar)

const btnFinalizar = document.querySelector('button.btnFinalizar')
btnFinalizar.addEventListener('click', finalizar)

let num = document.getElementById('num')
let numeros = []
let res = document.querySelector('div.res')
let lista = document.getElementById('selectNum')

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else { 
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, numeros)) {
        numeros.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)

        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou ja encontrado na lista! Tente novamente.')
    }

    num.value = ''
    num.focus()
}



function finalizar() {
    if(numeros.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = Number(numeros.length)
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        let media = 0
        for( let pos in numeros) {
            soma += numeros[pos]
            if(numeros[pos] > maior) {
                maior = numeros[pos]
                media = soma/tot
            }
            if(numeros[pos] < menor ) {
                menor = numeros[pos]
            }
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos <strong>${tot}</strong> números cadastrados`
        res.innerHTML += `<p>O maior número encontrado foi <strong>${maior}</strong></p>`
        res.innerHTML += `<p>O menor número encontrado foi <strong>${menor}</strong></p>`
        res.innerHTML += `<p>A soma de todos os valores é igual a <strong>${soma}</strong></p>`
        res.innerHTML += `<p>A média de todos os valores é igual a <strong>${media}</strong></p>`
    }
}
