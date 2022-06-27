let array = []

function analisar(){
    let input = (document.getElementById('txtn').value)
    array.push(parseInt(input))
    console.log(array)
    let tabela = document.getElementById('seltab')
    
    if(input.length == 0 || input < 1 || input > 100){
        window.alert('Digite um valor valido')
    } else{
        let n = Number(input.value)
        let item = document.createElement('option')
        console.log(item)
        item.text = `Valor ${input} adicionado.`
        tabela.appendChild(item)
        
    }
}

function resultados(){
    let res = document.getElementById('resultado')
    let tabela = document.getElementById('seltab')
    let cadastrados = tabela.length
    console.log(cadastrados)
    res.innerHTML = `</p>Ao todo temos ${cadastrados} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior(array)}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor(array)}</p>`
    res.innerHTML += `<p>Somando os todos os valores temos ${soma(array)}</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${parseInt(media(array))}</p>`
}

function soma(valores){                     
    let soma = 0
    for(c = 0; c < valores.length; c++){
        
        soma += valores[c]
    }
    return soma
}

function media(calculandoMedia){
    let divisao = soma(calculandoMedia)
    let armazena = calculandoMedia.length
    
    return divisao / armazena
}

function maior(valores){
    /*
    - Definir maior valor como 0
    - Utilizar laço de repetição para percorrer os valores da lista
    - Verificar se o elemento é maior do que o valor, se sim reatribui o valor recebendo element
    */
   let valor = 0
   valores.forEach(element => {
    if(element>valor){
        valor = element
    }
   });
   return valor
}


function menor(valores){
        /*
    - Definir menor valor como 0
    - Utilizar laço de repetição para percorrer os valores da lista
    - Verificar se o elemento é menor do que o valor, se sim reatribui o valor recebendo element
    */
    let valor = valores[0]
    valores.forEach(element => {
        if(element < valor){
            valor = element
        }
    })
    return valor
}