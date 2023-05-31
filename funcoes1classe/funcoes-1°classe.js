
// Atribuir funcao a uma variavel 

const foo = function () {
    console.log('foolbar')
}

//Passar uma função como um argumento 

function dizOla() {
    return 'Olá, '
}

function apresentacao (funcaoMsgOla, nome) {
    console.log(`${funcaoMsgOla}${nome}`)
}

apresentacao(dizOla(), 'Victor')


//Retornar uma função 


function printMyName() {
    return function() {
        console.log('Victor Alexandre Machado da Silva')
    }
}

const myName = printMyName()

myName()