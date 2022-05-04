//Operador ternario
const autenticado = true
const puedePagar = false

console.log(autenticado ?
  puedePagar? 'esta autenticado y puede pagar' : 'Si está autenticado pero no puede pagar' 
: 'no está autenticado')

/*----------------------------------------------------------
            Break y continue en un for
----------------------------------------------------------*/

for(let i=0; i<=10; i++){
  if(i===5){
    console.log('es el numero 5, finalizando..')
    //ejecuta las lineas anteriores pero aquí termina el ciclo
    break
  }
  console.log(i)
}

for(let i=0; i<=10; i++){
  if(i===5){
    console.log('CINCO') // reemplazamos el 5 por la palabra CINCO
    //rompe el ciclo donde indiquemos y no omite esa parte, pero sigue avanzando
    continue
  }
  console.log(i)
}

const arregloCarrito = [
  {nombre: 'TV', costo: 2000},
  {nombre: 'Tablet', costo: 2000, descuento: true},
  {nombre: 'PC', costo: 2000},
  {nombre: 'Smart TV', costo: 2000},
  {nombre: 'Consola', costo: 2000}
]

arregloCarrito.forEach( (producto, i) =>{
  console.log(`${i}: ${producto.nombre}`)
})

for(let i=0; i<arregloCarrito.length; i++){
  if(arregloCarrito[i].descuento){
    console.log(`El articulo ${arregloCarrito[i].nombre} tiene descuento`)
    continue
  }
  console.log(arregloCarrito[i])
}

/*FizzBuzz*/

// multiplos de 3: 3,6,9,12,15 fizz
// multiplos de 5: 5,10,15,20 buzz
// los que son multiplos de 3 y 5: 15,10,45 fizzbuzz

multiplos = () =>{
  for(let i=0;i<50;i++){
    if(i%3 === 0 && i%5 === 0){
      console.log(`${i} FizzBuzz`)
    }else if(i%3 === 0){
      console.log(i +' fizz')
    }else if(i%5 === 0){
      console.log(i +' buzz')
    }
  }
}

console.log(multiplos())

/*------------------------------------------------------
                          ForEach:
                ideal para recorrer arreglos
*/

const pendientes = ['Tarea', 'comer', 'proyecto', 'matemáticas']

pendientes.forEach((pendiente) => {
  console.log(pendiente)
}) /* return: Tarea
              comer
              proyecto
              matemáticas
*/ 

//map regresa un arreglo
pendientesArr = pendientes.map( pendiente => pendiente)
console.log(pendientesArr)
//return: ['Tarea', 'comer', 'proyecto', 'matemáticas']

/*----------------------------------------------
                    FOR OF
*/

const helados = ['chocolate', 'fresa', 'vainilla', 'menta']

for( let helado of helados){
  console.log(helado)
}

const artista = [
  {
    nombre: 'SWS',
    album: 'SWS',
    fecha: 2012
  },
  {
    nombre: 'Breathe Caroline',
    album: 'Riot',
    fecha: 2019
  },
  {
    nombre: 'J.UNA',
    album: 'nevertheless',
    fecha: 2021
  }
]

for(let artist of artista){
  console.log(artist.nombre)
}
