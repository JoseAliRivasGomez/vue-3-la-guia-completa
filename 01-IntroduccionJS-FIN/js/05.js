const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}

// Object.freeze(producto)
// Object.seal(producto)

// Reescribir un valor
producto.nombre = "Monitor Curvo"

// Añadir un valor 
producto.imagen = "imagen.jpg"

delete producto.disponible

const { disponible, precio, ...producto2 } = producto

console.log(producto2)