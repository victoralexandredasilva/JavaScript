const screen = document.querySelector('.screen')


function insert(num) {
    let numero = screen.innerHTML
    screen.innerHTML = numero + num
}

function clean() {
    screen.innerHTML = ''
}

function backString() {
    let resultado = screen.innerHTML
    screen.innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() {
    let resultado = screen.innerHTML
    if(resultado) {
        screen.innerHTML = eval(resultado)
    } else {
        screen.innerHTML = '0'
    }
}