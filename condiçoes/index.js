let paisnatal = 'Brasil'
let paisnatal2 = 'brasil'
let res = window.document.getElementById('res')

let pais = window.prompt('Qual seu país?')

if( pais == paisnatal || pais == paisnatal2 ) {
    res.innerHTML = 'Você é Brasileiro!'
    window.document.body.style = 'background-image:url("brasil.png");'
} else if( pais != paisnatal) {
    res.innerHTML = 'Você é Estrangeiro!'
    window.document.body.style = 'background-image:url("estrangeiro.png");'
}

