import { Router } from "express";
import { sendRecoveryMail } from "../config/nodemailer.js";
import crypto from 'crypto' //Reemplazo por JWT

const userRouter = Router()
const recoveryLinks = {}

userRouter.post('/password-recovery', (req, res) => {
    //Enviar el mail
    const { email } = req.body

    try {
        const token = crypto.randomBytes(20).toString('hex') // Token unico con el fin de que no haya dos usuarios con el mismo link de recuperacion

        recoveryLinks[token] = { email: email, timestamp: Date.now() }

        const recoveryLink = `http://localhost:4000/api/users/reset-password/${token}`

        sendRecoveryMail(email, recoveryLink)

        res.status(200).send('Correo de recuperacion enviado')
    } catch (error) {
        res.status(500).send(`Error al enviar el mail ${error}`)
    }
})


userRouter.post('/reset-password/:token', (req, res) => {
    const { token } = req.params
    const { newPassword, newPassword2 } = req.body

    try {
        const linkData = recoveryLinks[token]
        if (linkData && Date.now() - linkData.timestamp <= 3600000) {
            console.log(newPassword, newPassword2)
            const { email } = linkData
            console.log(email)
            console.log(token)
            if (newPassword == newPassword2) {
                //Modificar usuario con nueva contraseña

                delete recoveryLinks[token]

                res.status(200).send('Contraseña modificada correctamente')
            } else {
                res.status(400).send('Las contraseñas deben ser identicas')
            }
        } else {
            res.status(400).send('Token invalido o expirado. Pruebe nuevamente')
        }
    } catch (error) {
        res.status(500).send(`Error al modificar contraseña ${error}`)
    }
})

export default userRouter