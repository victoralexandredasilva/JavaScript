let data = new Date()
let hora = data.getHours()
let res = document.getElementById('horario')
let img = document.createElement('img')
img.setAttribute('id', 'foto')


if( hora >= 6 && hora < 13) {
    img.setAttribute('src', 'img/manha.png')
    document.body.style.backgroundColor = '#869ad0'
} else if( hora > 13 && hora < 18) {
    img.setAttribute('src', 'img/tarde.png')
    document.body.style.backgroundColor = '#f5c674'
} else {
    img.setAttribute('src', 'img/noite.png')
    document.body.style.backgroundColor = '#093e43'
}

res.innerHTML = `Agora são ${hora} horas`
res.appendChild(img)