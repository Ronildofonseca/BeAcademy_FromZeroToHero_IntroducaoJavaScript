//Type Conversion
//Convertendo String para número e número para String

console.log(Number("9") + 24)
console.log(String(9) + ' Converteu diacho !!')

//Contar Caracteres
let oneWord = "Rony" //4 letras
console.log(oneWord.length)

//Maiúsculas e Minúsculas
let phrase = "Olha o bonde da BeAcademy oleeeeeeeeeeeeeé!"
console.log(phrase.toUpperCase())
console.log(phrase.toLowerCase())

//Convertendo para Inteiro
let decimalNumber = 32.8
console.log(parseInt(decimalNumber))
//Convertendo para Decimal
let intergerNumber = 24
console.log(parseFloat(intergerNumber))
//Trabalhando com casas decimais, números depois da vírgula
let niceNumber = 24.98883416589
console.log(niceNumber.toFixed(4))
console.log(niceNumber.toFixed(4).replace('.', ','))

//Precisão Numérica
let otherNumber = 129/32
console.log( Number(otherNumber.toPrecision()))


//Manipulando String e Arrays
/*Separando um texto que contem os espaços, em um array onde cada texto é uma posição de array*/

let newPhrase = "Fala meus queridos e queridas"
console.log(newPhrase)
let phraseToArray = newPhrase.split(' ')
console.log(phraseToArray)

// Convertendo novamente o texto para string
//.join(" ") -> Permite que eu gere separações(-,_/'')

let phraseModify = phraseToArray.join(" ").toLowerCase()
console.log(phraseModify)

// Manipulando Strings e Arrays 
// Verificar se contém plavras ou letras

let stringInclude = "Escolhe a mim CentraIT!"
console.log(stringInclude.includes("IT"))


//Objetos

let arrayInclide = [
    "PayLivre",
    "Veem",
    "ne mim",
    "Meu amor",
    {
        firstName: "Pay",
        lastName: "Livre"
    }

]
console.log(arrayInclide.includes("PayLivre"))//Ele não consegue aplicar dentro de um objeto, mas funciona normalmente dentro de array

//String startwith
console.log(stringInclude.startsWith("Es"))
//String endsWith
console.log(stringInclude.endsWith("IT!"))

//Transformando um array em caractere
let wordToArray = "Quem esta gostando diz Hey!!"
console.log(Array.from(wordToArray))


//Manipulando Arrays

const animals = ["galinha","cachorro", "elefante","girafa","leão"]
console.log(animals)

//Adicionar item no fim do Array
console.log(animals.push("rato"))
console.log(animals)
//Adicionar item no começo do Array
console.log(animals.unshift("porco"))
console.log(animals)
//Remover item do fim
console.log(animals.pop())
console.log(animals)
//Remover item do começo
console.log(animals.shift())
console.log(animals)
//Pegar somente alguns elementos do array
//Não modifica o array
console.log(animals.slice(0,3))
console.log(animals)
//Remover 1 ou mais itens do array
//console.log(animals.splice(1,3)) 
//Encontrar a posição do array
let index = animals.indexOf("cachorro")
console.log(index)
animals.splice(index, 1)
console.log(animals)