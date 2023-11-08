const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = () => {
    fetch(url)
        .then((respuesta) => respuesta.json())
        .then( resultado => {
            console.log(resultado)
        })
        .catch(error => {
            console.log(error)
        })
        .finally( () => {
            console.log('Todo Listo')
        })
}

consultarAPI()