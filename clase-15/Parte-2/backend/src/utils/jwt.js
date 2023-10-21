import 'dotenv/config'
import jwt from 'jsonwebtoken'

export const generateToken = (user) => {

    /*
        1° parametro: Objeto asociado al token (Usuario)
        2° parametro: Clave privada para el cifrado
        3° parametro: Tiempo de expiracion
    */

    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '12h' })

    return token

}

export const authToken = (req, res, next) => {
    //Consultar al header para obtener el Token
    const authHeader = req.headers.Authorization

    if (!authHeader) {
        return res.status(401).send({ error: 'Usuario no autenticado' })
    }

    const token = authHeader.split(' ')[1] //Obtengo el token y descarto el Bearer

    jwt.sign(token, process.env.JWT_SECRET, (error, credential) => {
        if (error) {
            return res.status(403).send({ error: 'Usuario no autorizado, token invalido' })
        }
    })

    //Usuario valido
    req.user = credential.user
    next()


}
