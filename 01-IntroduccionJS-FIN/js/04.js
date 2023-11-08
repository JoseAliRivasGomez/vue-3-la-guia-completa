// Objetos
const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}

// console.log(producto.nombre)
// console.log(producto.precio)

// Destructuring
const { nombre, precio, disponible } = producto
// console.log(nombre)
// console.log(disponible)


// Object literal enhacement
const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    autenticado,
    user : usuario
}
console.log(nuevoObjeto)