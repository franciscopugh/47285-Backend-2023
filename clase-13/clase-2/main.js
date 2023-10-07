//console.log(process.argv)
/*
import { Command } from 'commander'

const program = new Command() //Genero un nuevo comando

program
    .option('-d', "Variables de debug", false) //letra - descripcion - valor por defecto
    .option('-p <port>', "Puerto de mi aplicacion", 4000)
    .option('--mode <mode>', "Mode de trabajo", "Development") //Development -> Testing -> "Optativo" Pre-production -> Production
    .requiredOption('-u <user>', "User de mi aplicacion", "No se ingreso ningun user")
    .option("-f ", "Ingrese el filtro de busqueda", " ")
program.parse() //Finalizar la configuracion

console.log(program.opts()) //Valores por defecto o los del usuario
console.log(program.args) //Los argumentos que Ingreso mi usuario
*/

import config from "./config.js";

console.log(config)