import { useRef } from "react"
import { useNavigate } from "react-router-dom"

export const Register = () => {

    const formRef = useRef(null)
    const navigate = useNavigate()

    const handleSumbit = async (e) => {
        e.preventDefault()
        const datForm = new FormData(formRef.current) //Tranformo un HTML en un objet iterator
        const data = Object.fromEntries(datForm)
        const response = await fetch('http://localhost:4000/api/sessions/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if (response.status == 200) {
            const datos = await response.json()
            console.log(datos)
            navigate('/login')

        } else {
            console.log(response)
        }
    }
    return (
        <div className="container">
            <h2>Formulario de Registro</h2>
            <form onSubmit={handleSumbit} ref={formRef}>
                <div className="mb-3">
                    <label htmlFor="first_name" className="form-label">Nombre: </label>
                    <input type="text" name="first_name" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">Apellido: </label>
                    <input type="text" name="last_name" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Edad: </label>
                    <input type="number" name="age" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email: </label>
                    <input type="email" name="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña: </label>
                    <input type="password" name="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>

        </div>
    )
}