var resultado = document.getElementById('res') // variavel global sendo utilizado por todas as funções
resultado.innerHTML = `<p>Aqui vou registrar suas ações com os botões acima.</p>`

function acao1() {
    resultado.innerHTML += `<p>Clicou no primeiro botão!</p>`
} // imprimindo a função do primeiro botao

function acao2() {
    resultado.innerHTML += `<p>Clicou no segundo botão!</p>`
}// imprimindo a função do segundo botao

function acao3() {
    resultado.innerHTML += `<p>Clicou no terceiro botão!</p>`
}// imprimindo a função do terceiro botao

function acao4() {
    resultado.innerHTML += `<p>Clicou no quarto botão!</p>`
}// imprimindo a função do quarto botao

function limpar() {
    resultado.innerHTML = `<p>Aqui vou registrar suas ações com os botões acima.</p>`
}