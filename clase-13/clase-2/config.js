import dotenv from 'dotenv'

const enviroment = "production"

dotenv.config({
    path: enviroment === "development" ? './.env.dev' : './.env.prod'
})

export default {
    user: process.env.USER,
    url: process.env.URLBDD,
    password: process.env.PASSBDD
}