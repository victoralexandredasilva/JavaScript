// // sintaxe 

// function primeiraFuncao() {
    
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Esperou isso daqui!')
//             resolve()
//         }, 1000);
//     })
// }

// async function segundafuncao() {

//     console.log('Iniciou!')

//     await primeiraFuncao()

//     console.log('Terminou!')

// }

// segundafuncao();



//exemplo pratico 

function getUser(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch((error) => console.log(error))
}

async function showUserName(id) {
    
    try {
        const user = await getUser(id)
        console.log(`O nome de usuário é: ${user.data.first_name}`)
    } catch(err) {
        console.log(`Erro: ${err}`)
    }

    
}

showUserName(7)
