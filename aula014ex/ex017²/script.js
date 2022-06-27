function tabuada(){
    let input = document.getElementById('txtn') // pega o input
    let tabuada = document.getElementById('seltab') // pega o select

    if(input.value.length == 0){                                // se o valor do input for vazio ( length == 0 )
        window.alert('Digite um numero valido')
    } else {
        let n = Number(input.value)       // converte o valor para NUMBER
        let contador = 1                  // contador inicia-se com o valor 1
        tabuada.innerHTML = ``            // limpa os options sempre que for gerado um novo valor
        while(contador <= 10){            // enquanto contador for menor ou = 10


            let item = document.createElement('option')         // criou o elemento option
            item.text = `${n} * ${contador} = ${n*contador}`    // inseriu no elemento option
            tabuada.appendChild(item)                           // insere no select o elemento option como filho
            contador++                                          // acrescenta contador + ele mesmo até o 10
        }
    }
}

