const myPromise = new Promise((resolve, reject) => { 
    const nome = 'joao'
    if( nome.toUpperCase() === 'VICTOR') {
        resolve('Usuário Victor encontrado!')
    } else {
        reject('Usuário Victor não encontrado!')
    }
})

myPromise.then(data => {
    console.log(data)
}).catch((error) => {
    console.error('Aconteceu um erro:', error)
})


// executando varias promessas com all() -> O all() espera todas as promessas serem resolvidas para serem logadas

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('p1 OK!')
//     }, 5000)
// })
// const p2 = new Promise((resolve, reject) => {
//     resolve('p2 OK!')
// })
// const p3 = new Promise((resolve, reject) => {
//     resolve('p3 OK!')
// })
// const p4 = new Promise((resolve, reject) => {
//     resolve('p4 OK!')
// })

// const resolveAll = Promise.all([p1, p2, p3, p4]).then((data) => {
//     console.log(data)
// })




// executando varias promessas com rice() -> O race() executa as promises por ordem de aceitação 

const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p5 OK!')
    }, 2000)
})
const p6 = new Promise((resolve, reject) => {
    resolve('p6 OK!')
})
const p7 = new Promise((resolve, reject) => {
    resolve('p7 OK!')
})
const p8 = new Promise((resolve, reject) => {
    resolve('p8 OK!')
})

const resolveAllRice = Promise.race([p5, p6, p7, p8]).then((data) => {
    console.log(data)
})




// Fetch request na API do gitHub
//Fetch API
const user = 'victoralexandredasilva';

fetch(`https://api.github.com/users/${user}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
})
.then((response) => {
    console.log(typeof response);
    console.log(response);
    return response.json();
})
.then((data) => {
    console.log(data);  // Exibe o objeto de resposta completo
    console.log(`O nome do usuário é: ${data.name}`);
})
.catch((error) => {
    console.log('Houve algum erro:', error);
});



