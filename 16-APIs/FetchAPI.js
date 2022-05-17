const jsonArray = document.querySelector('#jsonArray')
jsonArray.addEventListener('click', getData)

function getData(){
  const url = 'https://jsonplaceholder.typicode.com/users'
  fetch(url)
    .then( respuesta => respuesta.json())
    .then( resultado => mostrarDatos(resultado))
}

function mostrarDatos(data){
  const setContent = document.getElementById('setContent')
  let nombre

  data.forEach( descripcion => {
    const {name} = descripcion
    nombre += `<p>Nombre: ${name}</p>`
  })

  setContent.innerHTML = nombre
}