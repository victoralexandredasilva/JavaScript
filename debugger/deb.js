const str1 = "Vuctor Alexandre"

const funcaoLegal = (str) => {
    const retorno = 'Seu nome é: ' + str;
    return retorno
}

const retornoFuncaoLegal = funcaoLegal(str1)

if( str1.length > 10 ) {
    console.log(retornoFuncaoLegal);
} else {
    console.log("Não deu para executar funcaoLegal")
}