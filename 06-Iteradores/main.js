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

for(let i=0; i<arregloCarrito.length; i++){
  if(arregloCarrito[i].descuento){
    console.log(`El articulo ${arregloCarrito[i].nombre} tiene descuento`)
    continue
  }
  console.log(arregloCarrito[i])
}