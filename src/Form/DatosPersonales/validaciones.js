export const ValidarNombre = (nombre) => {
    const length = nombre.length
    return (length > 1 && length < 30 ? true : false)
} 

export const ValidarApellidos = (apellidos) => {
    const length = apellidos.length
    return (length > 1 && length < 50 ? true : false)
} 

export const ValidarTelefono = (telefono) => {
    const length = telefono.length
    return (length >= 8 && length <= 14 ? true : false)
} 