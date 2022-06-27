var pais = 'Brasil'
if(pais == 'Brasil') {
    console.log(`Você é Brasileiro!`)
}else {
    console.log('Você é Estrangeiro!')
}

function verifique() {
    var pais = document.getElementById("pais").value
    var resultado = document.getElementById('res')
    if(pais == 'Brasil') {
        resultado.innerHTML = 'Você é Brasileiro!'
    }else {
        resultado.innerHTML = 'Você é Estrangeiro!'
    }
}