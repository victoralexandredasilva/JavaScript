// Se voecê retornar uma função com this sem um objeto na frente, ele aponta para o window, janela, document ( vendo no DevTools ) ou global (vendo no node)

//Exemplo sem objeto na frente

// function mostrarThis() {
//     console.log(this)
// }


// mostrarThis()





// var jogos = "Aqui estão alguns dos meus jogos preferidos!"
const menina = {
    nome: 'Priscila',
    jogos: ['GTA', 'FF', 'DragonBall', 'Pou'],

    mostrarJogos: function () {
        console.log(this.jogos)
    }
}

menina.mostrarJogos() // ['GTA', 'FF', 'DragonBall', 'Pou']

//No exemplo acima percebemos que se nao usarmos o THIS para mostrar os jogos de Priscila, apontando para os jogos da função dentro do objeto, ele busca no escopo global fora do objeto, considerando não sendo definido



const aluno =  {
    nome: "Victor Alexandre",
    anoNascimento: 2006,
}

const aluna = { 
    nome: "Mariana Arruda",
    anoNascimento: 2008,

    showName: function () { 
        console.log(this.nome)
    }, 

    trocarAnoNascimento: function (novoAno) {
        return this.anoNascimento = novoAno
    }
}



aluna.showName()  // Mariana Arruda

//Vimos que nos objetos acima, temos a propriedade com o nome de um aluno e uma aluna, no exemlo do aluno, damos somente a propriedade nome ao objeto, ja no da aluna, alem do nome tambem acrescentamos um método com a funcao para mostrar o nome da aluna

// No exemplo abaixo iremos usar uma propriedade para mostrar o nome do aluno, Victor por meio da funcao showName que esta presente no objeto aluna;

aluna.showName.call(aluno) // Victor Alexandre

console.log(aluna.anoNascimento) // Aqui mostramos o ano que esta como propriedade no objeto ALUNA, ou seja 2008;

console.log(aluna.trocarAnoNascimento(2003)) // 2003, pois a funcao trocarAnoNascimento no objeto, recebe o parametro anoNovo, que é recebido como um novo valor na variavel ano, em propriedade do objeto ALUNA


//Agora no exemplo abaixo, iremos definir um novo valor ao ano de nascimentp, só que no objeto ALUNO, através da propriedade call;

aluna.trocarAnoNascimento.call(aluno, 1990)
console.log(aluno.anoNascimento) // 1990

//No exemplo acima, vimos que call recebe 2 parametros, o 1° basicamente é o objeto que estamos acessando, e o 2°, o valor do paramentro da funcao trocarAnoNascimento;

//Podemos usar para o mesmo caso a propriedade apply, a diferença dele para o call, é que no call passamos um argumento, e no apply, podemos passar varios argumentos, como um vetor;

aluna.trocarAnoNascimento.apply(aluno, [2002])
console.log(aluno.anoNascimento) //2002


//Podemos fazer isso criando um proprio metodo ao objeto, por meio de uma variavel, por meio dod BIND, facilitando a troca de valores sem usar o call ou apply

let trocarAnoNascAluno = aluna.trocarAnoNascimento.bind(aluno, 1970)
trocarAnoNascAluno()
console.log('Novo ano de nascimento: ' + aluno.anoNascimento)



//No exemplo abaixo usamos o this quando se acontece um evento, o this nesse caso se refere ao objeto btn, tanto que se clicarmos no botão, o evento dispara, e o this see refere ao proprio botao, com o mesmo ficando verde;

const btn = document.querySelector('.btn').addEventListener('click', function () {
    // console.log(this) --> O THIS SE REFERE AO PROPRIO BOTAO
    this.style.background = 'green'
})



// Função Construtora: 

function Person(nome) {
    this.nome = nome //aponta para a propriedade nome que vai ser criada
}

const person1 = new Person('Gabriel')
console.log(person1.nome)

const person2 = new Person('Maria')
console.log(person2.nome)

//A funcao construtora basicamente funciona como um modelo pronto de codigo, pelo proprio nome, ela constroi objetos atraves do parametro
//No exemplo acima, o parametro da funcao (NOME), ela recebe um valor, e quando criado um novo objeto atraves dessa funçao construtora, o parametro nome é criado como propriedade desse objeto
// Ali quando criamos o person1, criamos um novo objeto atraves da funcao construtora Person, colocando como parametro a propriedade desse novo onjeto(ou seja, o nome desse person);