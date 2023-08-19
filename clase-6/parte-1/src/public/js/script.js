const socket = io()

socket.emit('mensajeConexion', { user: "Francisco", rol: "User" })

socket.on('credencialesConexion', (info) => {
    console.log(info)
})