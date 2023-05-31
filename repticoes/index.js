var btn = document.getElementById('btn')
btn.addEventListener('click', gerar)


function gerar() {
    let txtn = document.getElementById('txtn') 
    let n = Number(txtn.value)
    let res = document.querySelector('select#res')
    res.innerHTML = ''

    for( c = 1; c <= 10; c++ ) {
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        res.appendChild(item)
    }
}