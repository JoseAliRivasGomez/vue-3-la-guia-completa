// ESM - EcmaScript Modules
import texto, { sumar as suma, restar } from "./funciones.js"


const sumar = function() {
    console.log('suma')
}

console.log(suma(10, 20))
console.log(restar(100, 20))

console.log(texto)