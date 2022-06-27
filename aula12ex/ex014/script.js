function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var texto = window.document.getElementById('titulo')
    var fundoSection = document.getElementById('fundoSection')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora <= 12){
        // Bom dia!
        img.src = 'fotomanha.jpeg'
        document.body.style.background = `#F29057`
        texto.style.color = `BF2604`
        fundoSection.style.background = `#F25C05`
    }else if(hora >= 12 && hora <= 18){
        // Boa tarde!
        img.src = 'fototarde.jpg'
        document.body.style.background = `#BF2604`
        texto.style.color = `BF2604`
        fundoSection.style.background = `#59220E`
    } else {
        // Boa noite!
        img.src = 'fotonoite.jpg'
        document.body.style.background = `#012340`
        document.getElementById('titulo').style.color = `#D99559`
        fundoSection.style.background = `#D99559`
    }
}