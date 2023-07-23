//ECMA 7
/*let numero1 = 5
console.log(Math.pow(5, 3))
console.log(5 ** 3)

const users = ["Pepe", "Maria", "Ezequiel", "Sofia"]

if (users.includes("Maria")) {
    //Ejecutar operaciones por verdadero
    console.log("Usuario premium encontrado")
} else {
    console.log("Usuario premium no encontrado")
}

//ECMA 8

const mascota = { nombre: "Rodolfo", raza: "Indefinida", color: "Cafe" }

console.log(Object.keys(mascota)) //Nombre de las claves
console.log(Object.values(mascota))//Valor de las claves
const mascotaArray = Object.entries(mascota) //Consulto atributos clave-valor
mascotaArray.forEach(claveValor => {
    console.log(claveValor)
})


//ECMA 9
//REST
const sumarFacturas = (...facturas) => { //... en los parametros de una funcion se llama operador REST
    console.log(...facturas) //SPREAD
    console.log(facturas.reduce((a, b) => a + b, 0))
}


sumarFacturas(1000, 2000, 5000, 20000)


//ECMA 10

let nombre = " Francisco "
console.log(nombre.length)
console.log(nombre.trim()) //Elimina todos los espacios del principio y del final
console.log(nombre.trimEnd().length)
console.log(nombre.trimStart()) 

const facturas = [100, 2000, [1000, [[1000], 500]], 400, 3000]

const facturas1 = facturas.flat(3)

console.log(facturas1)

console.log(facturas1.reduce((a, b) => a + b, 0))

//import { verClima } from "./VerClima.js";

let opcion = true

opcion ? import('./VerClima.js').then((archivo) => archivo.verClimita()) : import('./VerClima.js').then((archivo) => archivo.verOceanito())

if (opcion) {
    import('./VerClima.js').then((archivo) => archivo.verClimita())
    import('./VerClima.js').then((archivo) => console.log(archivo.HOLA))
} else {
    import('./VerClima.js').then((archivo) => archivo.verOceanito())
}*/

//ECMA 11

const sueldos = [
    { nombreCompleto: "Pedro Perez", sueldo: undefined },
    { nombreCompleto: "Maria Martinez", sueldo: 15000 },
    { nombreCompleto: "Laura Laspina", sueldo: 12000 },
    { nombreCompleto: "Franco Fernandez", sueldo: 13000 },
    { nombreCompleto: "Monica Molilla", sueldo: 8000 }
]

let acum = 0

sueldos.forEach((empleado) => {

    acum += empleado.sueldo ?? 0

    if (!empleado.sueldo) { //Si el sueldo es null o undefined
        console.log("Fallo en sueldo de ", empleado.nombreCompleto)
    }
})

console.log(acum)