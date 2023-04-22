const nameInput  = document.querySelector('#nome')
const emailInput = document.querySelector('#email')
const msgError = document.querySelector('.msg')
const labelName = document.querySelector('#labelName')
const labelEmail = document.querySelector('#labelEmail')
const items = document.querySelector('.items')

const btn = document.querySelector('#btn')
btn.addEventListener('click' ,(e) => {
    e.preventDefault()

    if(nameInput.value === '' || emailInput.value === ''){
        msgError.textContent = 'Por favor! Preencha todos os campos obrigatórios'
        nameInput.style.borderColor = 'red'
        emailInput.style.borderColor = 'red'
        labelName.style.color = 'red'
        labelEmail.style.color = 'red'

        setTimeout(() => {
            msgError.textContent = ''
            nameInput.style.borderColor = 'black'
            emailInput.style.borderColor = 'black'
            labelName.style.color = 'black'
            labelEmail.style.color = 'black'
        }, 5000)
        return;
    }

    const li = document.createElement('li')
    li.innerHTML = `Name: ${nameInput.value} <br>
    Email: ${emailInput.value}`
    
    items.appendChild(li)

    nameInput.value = ''
    emailInput.value = ''
    nameInput.focus()

    })

const removeList = document.querySelector('removeList')
removeList.addEventListener('click', (a) => {
    a.preventDefault()
    
    items.remove
})



