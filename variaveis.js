// Declarar VAR, LET e CONST

/*let name = "Luan"
console.log(name)

name = 32
console.log(name)

name = "Monteiro"
console.log(name)
*/ 
// A váriavel let é dinâmica, podendo assim receber mudanças de valores

/*const name = "Luan"
console.log(name)
name = "Monteiro"*/

// A váriavel const, não recebe mudanças de valores

//****Globais****//
//Hoisting -> Var (Ela é capaz de trazer uma variável para o topo caso seja preciso)


/*console.log('Variável name existe aqui?', name)

{//Scopo (Bloco de código)
    //Local
    var name = "Luan"
}
console.log('Variável name existe aqui?', name)*/


//****Locais****//

/*let name = "Luan"

console.log('Meu nome chegou aqui?', name)

{//Scopo (Bloco de código)
    //Local
    let name = "Jenifer"
    console.log('Meu nome chegou aqui?', name)
}

console.log('Meu nome chegou aqui?', name)*/

// Declarar 
//Objetos

const human = {
    name: "Rony Fonseca",
    age: 29,
    weight: 80,
    isAthlete: false,
    walk: function(){
        console.log('Eu ando bastante!!')
    }
} //Objeto

/*console.log(human)
console.log({human})
console.log(human.age)
console.log(human.walk())*/

//Concatenar  

console.log("O Humano " + human.name + " tem a idade de " + human.age + " anos!")

//Interpolação

console.log(`O Humano ${human.name} tem a idade de ${human.age} anos!`)


//Array
//Para acessar é preciso localizar sua posição, diferente do obketo que usamos suas propriedades

const animals = [
    "Elefante",//0
    "Gato",//1
    "Leão",//2
    "Cachorro",//3
    {
        name: "Moacir",
        age: 2,
        weight: 4
    }
]

//Tamnho 5
console.log(animals[4].name)