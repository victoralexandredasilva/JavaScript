let btn = document.querySelector('button.btn')
btn.addEventListener('click', verificar)

let scaletemp = document.getElementsByName('scaletemp')
let temp = document.getElementById('temp')
let res = document.querySelector('div.res')

function verificar() {
        if(temp.value.length == 0) {
            window.alert('O campo não pode estar vazio!')
            res.innerHTML = 'Não foi possível converter a temperatura!'
        } else {
            if(scaletemp[0].checked) {
                res.innerHTML = tempCelsius(temp.value)
                return tempCelsius(temp.value)
            }
            if(scaletemp[1].checked) {
                res.innerHTML = tempFarenheit(temp.value)
                return tempFarenheit(temp.value)
            }
            if(scaletemp[2].checked) {
                res.innerHTML = tempKelvin(temp.value)
                return tempKelvin(temp.value)
            }
    }
}

function tempCelsius(c) {
    let tempF = Number((9*c + 160)/5)
    let tempK = Number(c) + 273
    res.innerHTML = `<p>A temperatura <strong>${c}°C</strong> é igual a <strong>${tempF}°F</strong> ou <strong>${tempK}K</strong></p>`
}

function tempFarenheit(f) {
    let tempC = Number((5*f - 160)/9)
    let tempK = Number(tempC + 273)
    res.innerHTML = `<p>A temperatura <strong>${f}°F</strong> é igual a <strong>${tempC}°C</strong> ou <strong>${tempK}K</strong></p>`
}

function tempKelvin(k) {
    let tempC = Number(k - 273)
    let tempF = Number((9*tempC + 160)/5)
    res.innerHTML = `<p>A temperatura <strong>${k}K</strong> é igual a <strong>${tempC}°C</strong> ou <strong>${tempF}°F</strong></p>`
}
