var agora = new Date() // armazenando na variavel agora a data hora e ano do PC
var hora = agora.getHours() // armazenando na variavel HORA a variavel agora acessando as horas do PC local
console.log(`Agora são exatamente ${hora} horas.`)
if(hora >= 6 && hora <=12) {
    console.log('BOM DIA!')
}else if(hora > 12 && hora < 18) {
    console.log('BOA TARDE!!!')
}else if(hora >= 18) {
    console.log('BOA NOITE!')
}else if(hora > 1 || hora < 6){
    console.log('BOA MADRUGADA CUMPADRE! ')
}