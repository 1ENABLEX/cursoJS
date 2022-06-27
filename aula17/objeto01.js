let amigo = {
nome:'José',
sexo:'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
console.log(Object.values(amigo))
amigo.engordar(2)

let amigoArray = [{
    nome:'José',
    sexo:'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }},
    {
        nome:'João',
        sexo:'M',
        peso: 80.4,
        engordar(p=0){
            console.log('Engordou')
            this.peso += p
        }}]
        amigoArray.map((e) => console.log(e))