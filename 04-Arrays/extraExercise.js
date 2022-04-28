const listaDeCompras = [['leche',2],['refresco',5],['pan',3],['pollo',4]]

console.log(`Voy a comprar ${listaDeCompras[3][1]} unidades de ${listaDeCompras[3][0]} `)

console.log(JSON.stringify(listaDeCompras))

/*Proximo en la fila

Define una funcion proximoEnLaFila que tome un arreglo (arreglo) y un número (elemento) como argumentos. Agrega el numero al final del arreglo y luego elimina el primer elemento del arreglo. La funcion debe retornar el elemento que fue removido.*/

proximoEnLaFila = (arreglo, elemento) =>{
  arreglo.push(elemento)
  return arreglo.shift() 
}

let miArreglo = [1,2,3,4]

console.log(`Antes: ${miArreglo}
ejecutando funcion... resultado: ${proximoEnLaFila(miArreglo,6)}
después: ${JSON.stringify(miArreglo)}`) 

