// Arrow Functions

const sumar = (numero1 = 0, numero2 = 10) => {
    console.log(numero1 + numero2)
}

const tecnologias = ['Vue.js', 'JavaScript', 'Node.js', 'HTML', 'CSS', 'Git']

// forEach
tecnologias.forEach( tech => console.log(tech) )

// map
const arrayMap = tecnologias.map(tech => tech)

const tecnologias2 = tecnologias.filter( tech => tech !== 'HTML')

// console.log(arrayMap)
console.log(tecnologias2)

// sumar(1, 2)
// sumar(10, 289)
// sumar(24, 49)