/*var nombreVar = "Francisco"
let nombreLet = "Francisco"

nombreVar = "Fede" //Redefino una variable ya declarada
nombreLet = "Franco" //Ante una variable declarada, le cambio el valor

//let edad1 = 50
//const edad2 = 60
//edad2 = 80 //No se puede hacer

//console.log(edad2)

const IVA = 1.21


let producto1 = { precio: 60, stock: 20 }
const producto2 = { precio: 50, stock: 60 }

//producto2 = null con CONST se evita eliminar el tipo de dato del objeto (no lo puedo pasar a primitivo)
producto2.precio = null
producto2.stock = null

console.log(producto1)

const users = []
*/

class Pokemon {
    constructor(nombre, tipo, vidas, ataque) {
        this.nombre = nombre
        this.tipo = tipo
        this.vidas = vidas
        this.ataque = ataque
    }

    //Metodos
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} te estoy saludando`)
    }

}

class Pikachu extends Pokemon { //Un pikachu ES UN Pokemon
    constructor(nombre, tipo, vidas, ataque, dañoImpactrueno) {
        super(nombre, tipo, vidas, ataque) //superclase - clase padre - Pokemon
        this.dañoImpactrueno = dañoImpactrueno
    }


    impactrueno() {
        console.log(`${this.nombre} tiro impactrueno con daño de ${this.dañoImpactrueno}`)
    }
}

class Charmander extends Pokemon { //Un pikachu ES UN Pokemon
    constructor(nombre, tipo, vidas, ataque, dañoLlamarada) {
        super(nombre, tipo, vidas, ataque) //superclase - clase padre - Pokemon
        this.dañoLlamarada = dañoLlamarada
    }


    llamadara() {
        console.log(`${this.nombre} tiro llamarada con daño de ${this.dañoLlamarada}`)
    }
}


const pikachu1 = new Pikachu("Pika pika", "Electrico", 10, 5, 8)
const charmander1 = new Charmander("Fueguito", "Fuego", 12, 5, 7)

pikachu1.saludar()
pikachu1.impactrueno()
charmander1.saludar()
charmander1.llamadara()