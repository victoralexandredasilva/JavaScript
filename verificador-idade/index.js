let btn  = document.getElementById('btn')
btn.addEventListener('click', verificar)

function verificar() {

    let nasc = document.getElementById('age')
    let date = new Date()
    let anoAtual =  date.getFullYear()
    let anoNascimento = nasc.value
    let result  = document.querySelector('div.resultado')
    let sexo = document.getElementsByName('sexo')
    let idade  = anoAtual - anoNascimento
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if( anoNascimento == 0 || anoNascimento < 1900) {
        window.alert('[ERRO] Digite corretamente o ano de Nascimento!')
        result.innerHTML = 'Não foi possível verificar a idade! Tente novamente.'

        img.style.display = 'none'
    }

    if( sexo[0].checked ) {
        genero = 'Homem'
        if( idade > 0 && idade <= 10 ) {
            img.setAttribute( 'src', 'img/menino-crianca.png')
        } else if( idade > 10 && idade <= 20 ) {
            img.setAttribute( 'src', 'img/menino-adolescente.png')
        } else if ( idade > 20 && idade <= 30) {
            img.setAttribute( 'src', 'img/jovem-menino.png')
        } else if( idade > 30 && idade <= 60) {
            img.setAttribute( 'src', 'img/homem.png')
        } else if( idade > 60 && idade <= 120) {
            img.setAttribute( 'src', 'img/idoso.png')
        } else {
            img.setAttribute( 'src', 'img/caveira.png')
        }
        
        result.innerHTML = `Detectamos ${genero} com ${idade} anos`
        result.appendChild(img)

    } else if( sexo[1].checked ) {
        genero = 'Mulher'
        if( idade > 0 && idade <= 10 ) {
            img.setAttribute( 'src', 'img/menina-crianca.png')
        } else if( idade > 10 && idade <= 20 ) {
            img.setAttribute( 'src', 'img/menina-adolescente.png')
        } else if ( idade > 20 && idade <= 30) {
            img.setAttribute( 'src', 'img/jovem-menina.png')
        } else if( idade > 30 && idade <= 60) {
            img.setAttribute( 'src', 'img/mulher.png')
        } else if( idade > 60 && idade <= 120) {
            img.setAttribute( 'src', 'img/idosa.png')
        } else {
            img.setAttribute( 'src', 'img/caveira.png')
        }

        result.innerHTML = `Detectamos ${genero} com ${idade} anos`
        result.appendChild(img)
    }
}