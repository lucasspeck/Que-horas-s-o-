function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Neste momento: ${hora}h${minutos}`
    if (hora >= 4 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = 'rgb(128 105 90)'
        msg2.innerHTML = `Bom dia!`
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = 'rgb(103 147 156)'
        msg2.innerHTML = `Boa tarde!`
    } else {
        img.src = 'noite.png'
        document.body.style.background = 'rgb(43 53 54)'
        msg2.innerHTML = `Boa noite!`
    }
}