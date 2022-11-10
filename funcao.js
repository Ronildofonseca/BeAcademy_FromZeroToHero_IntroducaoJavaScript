//Exemplo 1

    //Method
function myFristFunction(){
    //Entra meu código
    console.log('Olhaaa função!!!')
}
//Execute
myFristFunction()

//Funçao com parâmetros e argumentos
function sum(number1, number2){
    console.log(number1 + number2)
}
sum(32,24)
//Função com Return
function myFirstFunctionWithReturn(num1, num2){
    let total = num1 + num2
    return total
}
console.log(myFirstFunctionWithReturn(20,20))
//-> Total = 40

//Restaurante

function meuPratoDeComida(comida1,comida2,comida3,comida4) {
    return `Meu prato de comida é composto por ${comida1}, ${comida2}, ${comida3}, ${comida4}!`
}
const prato = meuPratoDeComida('arroz', 'feijão','bife','batata frita')
console.log(prato)

//Arrow Function

const myFirstArrowFunction =(number1, number2)=>{
let total = number1 + number2
return total
}
const result = myFirstArrowFunction(20,
    20)
    console.log(result)


//Função anônima
/*(function(){
    console.log('CentralIT S2')
}) ()//Autoexecução*/

setTimeout(function () {
  console.log('Vou levar 3 segundos para ser executado!')  
}, 3000)//3seg


//Escopo e Hoisting de uma Function
//Parte1

/*let assunto
function criarAssunto(assunto) {
    return asunto
}
console.log(criarAssunto(assunto))

//Parte2

let assunto = 'Estudar'//var = valor

function criarAssunto(assunto){
    return assunto
}
console.log(assunto)// resposta "Estudar"
console.log(criarAssunto(assunto))// resposta "Estudar"

//Parte 3

let assunto = 'Estudar'//var = valor

function criarAssunto(assunto){
    assunto = "Escutar música!"// Mudança de valor
    return assunto
}
console.log(assunto)// resposta "Estudar"
console.log(criarAssunto(assunto))// resposta "Escutar música"

//Parte4

let assunto = 'Estudar'//var = valor

function criarAssunto(){ //sem parâmetro
    assunto = "Escutar música!"// Mudança de valor
    return assunto
}
console.log(assunto)// resposta "Estudar"
console.log(criarAssunto(assunto))// resposta "Escutar música"*/

//Hoisting
/*
digaMinhaIdade()

function digaMinhaIdade(){
    return console.log(29)
}

//Callback
function minhaFuncao (Callback){
    console.log('Inicio da minha função =)')
    Callback(15, 15)
    console.log('Final de minha função')
}

minhaFuncao(
    (num1, num2)=>{
        return console.log(num1 + num2)
    }
)*/

//Function Construct

function Sum (){
    this.num1,
    this.num2,
    this.calc = function(num1, num2){
        return total = num1 + num2
    }
}

//Instanciar
/*const math = new Sum()
//console.log(math)
console.log(math.calc(32,32))

const math2 = new Sum()
console.log(math2.calc(50,64))
const num1 =  math.num1 = 24
const num2 =  math.num2 = 50
console.log(num1)
console.log(num2)
console.log(math.calc(num1, num2))

const math2 = new Sum()
const number1 = math2.num1 = 30
const number2 = math2.num2 = 10
console.log(math2.calc(number1,number2))*/

const math = new Sum ().calc(45,45)
console.log(math)

//
const data = new Date().getDay()
console.log(data)