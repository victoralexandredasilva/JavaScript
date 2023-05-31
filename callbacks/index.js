function callback(result) {
    console.log(`O resultado é: ${result}`)
};

function soma(n1, n2) {
    return n1 + n2 
};

callback(soma(3, 5));