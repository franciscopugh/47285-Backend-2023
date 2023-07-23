/*const boton = document.getElementById('boton1')
boton.addEventListener('click', () => {

})

const datos = []

datos.forEach(() => {

})

const calcularImpuestos = (calcularIVA(), calcularIIBB(), calcularImpuestosLocales()) => {

}

const empleados = [
    { nombreCompleto: "Pedro Perez", sueldo: undefined },
    { nombreCompleto: "Maria Martinez", sueldo: 15000 },
    { nombreCompleto: "Laura Laspina", sueldo: 12000 },
    { nombreCompleto: "Franco Fernandez", sueldo: 13000 },
    { nombreCompleto: "Monica Molilla", sueldo: 8000 }
]

const consultarEmpleados = (confirmacion) => {
    return new Promise((resolve, reject) => {
        if (confirmacion) {
            resolve(empleados)
        }
        reject("Acceso denegado")
    })
}

consultarEmpleados(true)
    .then(empl => console.log(empl))
    .catch(error => console.log(`Error en consultar empleados ${error}`))

fetch('https://criptoya.com/api/dolar')
    .then(promise => promise.json())
    .then(({ solidario, blue, mep, ccl }) => {
        //const { solidario, blue, mep, ccl } = dolar
        console.log(solidario, blue, mep, ccl)
    })
*/
const obtenerValoresDolar = async () => {
    try {
        const promise = await fetch('https://criptoya.com/api/dolar')
        console.log(promise)
        const dolar = await promise.json()
        console.log(dolar)
    } catch (error) {
        console.log(`Error en consultar dolar `, error)
    }
}

obtenerValoresDolar()


class ProductManager {
    constructor() {
        this.products = []
    }

    //Metodos para trabajar con productos
}

class Products {

}

const productManager = new ProductManager()
