const tecnologias = ['Vue.js', 'JavaScript', 'Node.js', 'HTML', 'CSS', 'Git']
const numeros = [10, 20, 30]

// Includes
let resultado = tecnologias.includes('Git')

// FindIndex
resultado = tecnologias.findIndex(tech => tech === 'Git')

// Some 
resultado = numeros.some(numero => numero > 35)

// Find
resultado = numeros.find(numero => numero === 5)

// Every
resultado = numeros.every(numero => numero > 1)

// Reduce
resultado = numeros.reduce( (total, numero) => numero + total, 0)

//Filter
resultado = tecnologias.filter( tech => tech === 'Vue.js')


console.log(resultado)