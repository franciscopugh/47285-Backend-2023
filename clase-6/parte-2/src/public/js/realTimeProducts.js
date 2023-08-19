const socket = io()
const form = document.getElementById('idForm')
const botonProds = document.getElementById('botonProductos')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const datForm = new FormData(e.target) //Me genera un objeto iterador
    const prod = Object.fromEntries(datForm) //De un objeto iterable genero un objeto simple
    socket.emit('nuevoProducto', prod)
    e.target.reset()
})

botonProds.addEventListener('click', () => {
    console.log("Hola")
    socket.on('prods', (prods) => {
        console.log(prods)
    })
})