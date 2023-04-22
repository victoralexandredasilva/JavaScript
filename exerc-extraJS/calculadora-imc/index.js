const nameInput = document.querySelector('#inputName')
const heightInput = document.querySelector('#inputHeight')
const weightInput = document.querySelector('#inputWeight')
const items = document.querySelector('.items')
const msgError  = document.querySelector('.msg')
const labelName = document.querySelector('#labelName')
const labelHeight = document.querySelector('#labelHeight')
const labelWeight = document.querySelector('#labelWeight')


const btn = document.querySelector('#btn')
btn.addEventListener('click', (e) => {
    e.preventDefault()

    if(nameInput.value === '' || heightInput.value === '' || weightInput.value === '') {
        msgError.textContent = 'Por Favor! Preencha todos os campos obrigatórios!'
        nameInput.style.borderColor = 'red'
        heightInput.style.borderColor = 'red'
        weightInput.style.borderColor = 'red'
        labelName.style.color = 'red'
        labelHeight.style.color = 'red'
        labelWeight.style.color = 'red'

        setTimeout(() => {
        msgError.textContent = ''
        nameInput.style.borderColor = 'black'
        heightInput.style.borderColor = 'black'
        weightInput.style.borderColor = 'black'
        labelName.style.color = 'black'
        labelHeight.style.color = 'black'
        labelWeight.style.color = 'black'
        }, 5000)

        return;
    }

    const IMC = Number(weightInput.value/(heightInput.value*heightInput.value))
    let imcValue = ''


    if(IMC < 18.5) {
        imcValue = 'Magreza'
    } else if( IMC >= 18.5 && IMC <= 24.99) {
        imcValue = 'Normal'
    } else if( IMC >= 25 && IMC <= 29.99) {
        imcValue = 'Sobrepeso'
    } else if( IMC >= 30 && IMC <= 39.99) {
        imcValue = 'Obesidade'
    } else if( IMC > 40) {
        imcValue = 'Obesidade Grave'
    }

    

    const li = document.createElement('li')
    li.innerHTML = `Nome: ${nameInput.value} <br>
                    IMC: ${IMC.toFixed(2)} <br> 
                    Estado: <strong>${imcValue}</strong>`
    items.appendChild(li)

    nameInput.value = ''
    heightInput.value = ''
    weightInput.value = ''
    nameInput.focus()
})