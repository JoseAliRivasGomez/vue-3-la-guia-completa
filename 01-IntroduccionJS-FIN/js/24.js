const heading = document.querySelector('.heading')

// heading.textContent = 'Un Nuevo Heading'
// heading.classList.remove('text-4xl')

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Valor por default'

const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach(enlace => enlace.textContent = 'Nuevo Texto')