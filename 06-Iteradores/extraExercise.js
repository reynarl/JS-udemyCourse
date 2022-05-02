//For -> arreglos anidados
var miArreglo =[[1,2,3],[4,5,6],[7,8,9]]

for(let i=0; i<miArreglo.length; i++){
  let arrAnidado = miArreglo[i]
  for(j=0; j<arrAnidado.length; j++){
    console.log(arrAnidado[j])
  }
}

//-----------------------------------------
//Lista de contactos representada con objetos, que son elementos de un arreglo.
var contactos = [
  {
    nombre: 'Reyna',
    apellido: 'López',
    numero: '9671234567',
    gustos: ['Anime', 'BL']
  },
  {
    nombre: 'Fernando',
    apellido: 'Martinez',
    numero: '9671234567',
    gustos: ['Marvel', 'Gatitos']
  },
  {
    nombre: 'Bubba',
    apellido: 'López',
    numero: '9671234567',
    gustos: ['Pollo', 'Atún']
  }
]

/*
Iterar sobre el arreglo, para acceder a cada uno de los objetos, crear una funcion que busque un contacto en base a su nombre y a una propiedad, y que muestre la propiedad con los valores*/

// buscarContacto = (nombre, propiedad) =>{
//   for(let i=0; i<contactos.length; i++){
//     if(contactos[i].nombre === nombre && contactos[i].hasOwnProperty(propiedad)){
//        return `
//        Nombre: ${nombre}
//        ${propiedad}: ${contactos[i][propiedad]}`
//     }else{
//       return 'El usuario y/o propiedad no existen'
//     }
//   }
// }


//otra forma de realizarlo: 

buscarContacto = (nombre, propiedad) =>{
  for(let i=0; i<contactos.length; i++){
    if(contactos[i].nombre === nombre){
      //retorna la propiedad si existe o el msj si no existe la propiedad
       return contactos[i][propiedad] || 'La propiedad no exite'
    }
  }
  return 'El contacto no está en la lista'
}

console.log(JSON.stringify(contactos))

console.log(buscarContacto('Reyna', 'gustos'))


//-----------------------------------------------------

retornarMinimo = (x,y) =>{
  return x < y ? x : y
}

console.log(retornarMinimo(4,7)) 

compararNumeros = (a,b) =>{
  return a === b ? 'son iguales'
       : a > b ? `${a} es mayor` 
       : `${b} es mayor`
}

console.log(compararNumeros(5,3))

/*--------------------------------------------------
rest operator -> convierte los elementos en un arreglo
spread operator -> convierte el arreglo en elementos normales
--------------------------------------------------*/

//los numeros puestos con spread opertor en la funcion, toman el arreglo y los descompone en sus elementos individuales
const numeros = [1,2,3]

sumarSpreadOperator = (x,y,z) => `Suma1: ${x+y+z}`
console.log(sumarSpreadOperator(...numeros))


//Los numeros ingresados al usar rest operator como parámetro, se convierten en un arreglo
sumarRestOperator = (...numerosRest) =>{
  let suma = 0
  for(let i=0; i<numerosRest.length;i++){
    suma = suma + numerosRest[i]
  }
  return `Suma2: ${suma}`
}

console.log(sumarRestOperator(1,2,3))
