// Tipos de datos

// Undefined 
let cliente
console.log(typeof cliente)

// Boolean
const descuento = false
console.log(typeof descuento)

// Number
const numero1 = 20.30
const numero2 =  30
const numero3 = -200

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

// Strings o cadenas de texto
const alumno = 'Juan'
let producto = "Monitor 29 pulgadas"

const numero = 30
const numero2 = "30"

console.log(typeof numero)
console.log(typeof numero2)

const numeroGrande = BigInt(1)
const numero = 30
const numero2 = 10

console.log( numero + Number(numeroGrande) )

// Symbols (son unicos)
const primerSymbol = Symbol(1)
const segundoSymbol = Symbol(1)

const numero = 10
const numero2 = 10

console.log(primerSymbol === segundoSymbol)

// Object
const numeros = [1,2,3]
const descuento = null
const alumno = { }
console.log(typeof numeros)
console.log(typeof descuento)
console.log(typeof alumno)