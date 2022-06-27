function verificar() {
    var data = new Date()    // recebe data atual
    var ano = data.getFullYear() // pega ano da data atual
    var fano = document.getElementById('txtano') // acessa doc
    var res = document.getElementById('res')    // acessa doc
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex') // acessa doc
        var idade = ano - Number(fano.value) // ano - valor inserido
        var genero = ""                      // Genero quando for criado
        var img = document.createElement('img') // cria um element
        // img.setAttribute('src', 'fotoCriancaMasculina.jpg') SETA O CAMINHO E A IMAGEM 
        img.setAttribute('id', 'foto') // cria um ID de #Foto
        if(fsex[0].checked){ // se homem lá no input 1 [0]
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'fotoCriancaMasculina.jpg') // seta um src para documento criado "img" 
            } else if (idade < 21) {
                // Jovem 
                img.setAttribute('src', 'fotoJovemMasculino.jpg')
            } else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'adultoMasculino.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idosoMasculino.jpg')
            }
        }else if(fsex[1].checked) { // se mulher lá no input 1 [0]
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'fotoCriancaFeminina.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'fotoJovemFeminino.jpg')
            } else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'adultoFeminino.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idosoFeminino.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectemos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}