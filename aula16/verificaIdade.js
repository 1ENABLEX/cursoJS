function verificarIdade(idade){
    if(idade >= 18 ){
        console.log('Permitido')
    }else{
        console.log('Negado')
    }
}


let numeros = [2, 3, 9]

function soma(somando){
    let soma = 0
    for(c = 0; c < somando.length; c++){
        
        soma += somando[c]
    }
    return soma
}
console.log(soma(numeros))

function media(calculandoMedia){
    let soma = 0
    for(c = 0; c < calculandoMedia.length; c++){
        soma += calculandoMedia[c] 
    }
    let armazena = calculandoMedia.length
    
    return soma / armazena
}

console.log(media(numeros))