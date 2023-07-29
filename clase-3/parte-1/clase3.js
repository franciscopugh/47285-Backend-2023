/*import fs from 'fs'
//const fs = require(fs)
//Sincronica

//Escribir un archivo

fs.writeFileSync('./ejemplo.txt', "Hola, buenos dias")

//Consultar si existe el archivo
//console.log(fs.existsSync('./ejemplo.txt'))

if (fs.existsSync('./ejemplo.txt')) {
    //Leer un archivo
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
    console.log(contenido)

    //Agregar contenido al archivo
    fs.appendFileSync('./ejemplo.txt', "\nHola, que tal?")

    //Eliminar el archivo
    fs.unlinkSync('./ejemplo.txt')
}
*/

//Import promises del modulo 'fs' pero lo voy a llamar fs
import { promises as fs } from 'fs'

const consultarTxt = async () => {
    await fs.writeFile('./ejemplo.txt', "Adios, buenas tardes")
    let resultado = await fs.readFile('./ejemplo.txt', 'utf-8')
    console.log(resultado)
    await fs.appendFile('./ejemplo.txt', "\nAdios, buenas noches")
    await fs.unlink('./ejemplo.txt')
}

consultarTxt()