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

