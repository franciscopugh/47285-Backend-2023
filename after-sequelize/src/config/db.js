import { Sequelize } from "sequelize";

const sequelize = new Sequelize('testCoder', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
})

sequelize.authenticate()
    .then(() => {
        console.log("Conexion a BDD")
    })
    .catch((error) => {
        console.log(`Error en conexion a BDD: ${error}`)
    })

export default sequelize