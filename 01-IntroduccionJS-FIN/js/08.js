// Template Strings o Concatenación

const cliente = "Juan"
const saldo = 400

console.log('El Cliente : ' + cliente + ' tiene un saldo de : ' + saldo )
console.log('El Cliente : ', cliente , ' tiene un saldo de : ' , saldo )
console.log(`El Cliente : ${cliente} tiene un saldo de: ${saldo}`)

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}

console.log(`El Producto: ${producto.nombre}, tiene un precio de: ${producto.precio}`)