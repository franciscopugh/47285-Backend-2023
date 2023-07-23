/*let nombre1 = "Francisco"
let nombre2 = nombre1

console.log(nombre1)
console.log(nombre2)

nombre1 = "Pedro"

console.log(nombre1)
console.log(nombre2)
*/

let user1 = {
    nombre: "Francisco", apellido: "Pugh", mascotas: [
        { nombre: "Copito de nieve", animal: "Gato" },
        { nombre: "Cual", animal: "Perro" },
    ]
}
//let user2 = { ...user1 } //Evito copiar la referencia, solamente copio los datos Copia superficial de objetos
let user2 = structuredClone(user1) //Copia profunda de objetos
console.log(user1)
console.log(user2)
user2.apellido = "Fernandez"
user2.mascotas[0] = null

console.log(user1)
console.log(user2)

const users = [{ nombre: "Pedro" }, { nombre: "Ana" }]
users.map(user => user.nombre = "Juan")