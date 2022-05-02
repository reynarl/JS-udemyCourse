const plantas = [
  {
    tipo: 'flores',
    lista: [
      'rosas',
      'tulipanes',
      'diente de león'
    ]
  },
  {
    tipo: 'árboles',
    lista: [
      'abeto',
      'pino',
      'abedul'
    ]
  }
]

const {lista, tipo} = plantas[0]
console.log(tipo, lista[0])

console.log(plantas[0].tipo)
console.log(plantas[0]['tipo'])
console.log(plantas[0].lista[0])


/* Tenemos un objeto que representa parte de una colección de álbumes musicales.
Cada álbum tiene un número de identificación único (id) asociado a otras propiedades
No todos los álbumes tienen la información completa */

const coleccionDeDisco = {
  7853:{
    tituloDelAlbum: 'Sleep With Sirens',
    artista: 'Sleep With Sirens',
    canciones: ['How Are You Now?', 'The Bomb Dot Com']
  },
  5439:{
    tituloDelAlbum: 'ABBA Gold'
  }
}

/* Define una funcion actualizarDiscos que tome los siguientes parámetros:
-discos (el obj que representa la colección de discos)
-id
-propiedad (artista o canciones)
-valor*/

actualizarDiscos = (discos, id, propiedad, valor) =>{
  // Si valor es una cadena vacía , elimina la propiedad del álbum correspondiente
  if(valor === ""){
    delete discos[id][propiedad]
  }
  // Si propiedad es igual a la cadena de caracteres canciones, pero el album no tiene una propiedad llamada canciones, crea un arreglo vacío y agrega valor a ese arreglo
  else if(discos[id][propiedad] === 'canciones'){
    // discos[id][propiedad] = discos[id][propiedad] || []
    discos[id][propiedad].push(valor)
  }
  else{
    //si la propiedad no existe, debes crearla y asignar ese valor
    discos[id][propiedad] = valor
  }
}


// coleccionDeDisco[7853]['canciones'].push('holi')
console.log(JSON.stringify(coleccionDeDisco))

console.log(actualizarDiscos(coleccionDeDisco,5439,'artista',"ABBA"))

console.log(JSON.stringify(coleccionDeDisco))


/*-------------------------------------------------------
Acceder a la temperatura min y max de hoy*/

const pronostico_local = {
  ayer:{
    minima: 61,
    maxima: 75
  },
  hoy:{
    minima: 64,
    maxima: 77
  },
  mañana:{
    minima: 68,
    maxima: 80
  }
}

//asignamos un nuevo nombre a la variable:
const {hoy:{minima: minimaHoy,maxima: maximaHoy}} = pronostico_local

console.log(`Pronostico de hoy: ${minimaHoy} ${maximaHoy}`)

//remover los tres primeros elementos de un arreglo

const arregloInicial = [1,2,3,4,5,6,7,8,9]

function removerTresPrimerosElem(arreglo){
  const [,,, ...nuevoArreglo] = arreglo
  return nuevoArreglo
}

console.log(removerTresPrimerosElem(arregloInicial))


/*---------------------------------------------------------
Sintaxis de desestructuración: pasar objeto como argumento*/
//1.
const nuevoPerfilCliente = {
  name: 'reyna',
  age: '25',
  nationality: 'Mexicana',
  localitation: 'México'
}

const actualizarPerfil = ({name, age}) =>{
  return `Nombre: ${name}, Edad: ${age}`
}

console.log(actualizarPerfil(nuevoPerfilCliente))

// 2. 
const estadisticas = {
  max: 56.78,
  desviacionEstandar: 4.34,
  mediana: 34.54,
  moda: 23.87,
  min: -0.75,
  promedio: 35.85
}

// const puntoMedio = (e) => (e.max + e.min / 2.0)
// poner en los parámetros los valores del objeto que vamos a usar
const puntoMedio = ({max, min}) => (max+min)/2.0 
//llamar la funcion y pasar el objeto
console.log(puntoMedio(estadisticas))

// retornar/crear un objeto en una funcion

//le decimos que las propiedades del obj van a tener los mismos nombres de los parámetros
const crearPersona = (altura, peso) => ({altura, peso})
console.log(crearPersona(156,60))

//return: {altura: 156, peso: 60}

//----------------------------------------------------
//declarar funciones dentro de los objetos

const mascota = {
  nombreM: 'Yui',
  animal: 'Conejo',
  //this se refiere al objeto con el que estamos trabajando
  descripcion() {
    return `Mi nombre es: ${this.nombreM}`
  }
}

console.log(mascota.descripcion())


/*----------------------------------------------------------
Clases
*/

class TransbordadorEspacial{
  constructor(planeta){
    this.planeta = planeta
  }
}

let zeus = new TransbordadorEspacial('Venus')
console.log(zeus.planeta)

let apolo = new TransbordadorEspacial('Júpiter')
console.log(apolo.planeta)

class Mascota{
  constructor(nombreMascota, edadMascota){
    this.nombreMascota = nombreMascota,
    this.edadMascota = edadMascota
  }
}

let miMascota = new Mascota('Bubba',4)
console.log(miMascota.nombreMascota)
console.log(miMascota.edadMascota)

let tuMascota = new Mascota ('Benske', 5)
console.log(tuMascota.nombreMascota)

class Libro{
  constructor(autor){
    //podemos proteger la data haciendo que las variables sean privadas, asignando un _ y se identifica como una señal para los demás 
    this._autor = autor
  }
  //getters: nos permite acceder al valor de forma indirecta, así protegemos el valor y no lo cambiamos directamente
  get autor(){
    return this._autor
  }
  //setters: nos permite actualizar el valor de una propiedad, podemos verificar con condicionales, el valor antes de asignarlo 
  set autor(nuevoAutor){
    this._autor = nuevoAutor
  }
}

let libro = new Libro('Anonimo')
console.log(libro.autor)

//setter
libro.autor = 'Reyna López'
console.log(libro.autor)