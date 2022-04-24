const numeros = [10,4,3,2,3,[1,2,3]]

//acceder al arreglo
console.table(numeros)
console.log(numeros[5][0])

/*------------------------------------------------------
                Recorrer un arreglo
--------------------------------------------------------*/
for(let i=0; i<numeros.length; i++){
    console.log(numeros[i]);
}

/*------------------------------------------------------
        Agregar al final o inicio de un arreglo
--------------------------------------------------------*/
// numeros.push(20)
// numeros.unshift(1000)
// console.table(numeros);

const carrito = []
const producto = {
    nombre: 'Monitor',
    precio: 20000
}
const producto2 = {
    nombre: 'TV',
    precio: 10000
}
const producto3 = {
    nombre: 'Tablet',
    precio: 50000
}
// carrito.push(producto)
// console.table(carrito);

/*------------------------------------------------------
            Agregar con spread operator
--------------------------------------------------------*/
//tomamos una copia de carrito y añadimos producto
let resultado = [...carrito, producto]
resultado = [...resultado, producto2]
//añadir al principio el producto 3
resultado = [producto3, ...resultado]
console.table(resultado);
// console.log(resultado);

/*------------------------------------------------------
                Destructuring en Arreglos
--------------------------------------------------------*/
//a diferencia del objeto, la variable puede tomar cualquier nombre
const vowels = ['a','e','i','o','u']
//El nombre de la variable no importa, pero si la posicion. Para no poner variables que no usaremos, (porque eso ocupa memoria), separamos por comas para indicar los espacios y así obtener el valor que queremos.

// const [posicionUno, posicionDos, posicionTres] = vowels (NO)
//const [ ,posicionTres] = vowels (Así no obtendremos la posicion 3)
const [ , , , posicionTres] = vowels //(SI)
console.table(vowels);
console.log(`Vocal en la posicion 3: ${posicionTres}`);

//con spread operator 'todos' será un arreglo de las demás posiciones que no sean parte del destructuring.
const [posicionUno, ...todos] = vowels
console.log(todos);

/*------------------------------------------------------
                    forEach Method
--------------------------------------------------------*/
const arreglo = [
    {nombre: 'TV', precio: 2000},
    {nombre: 'Smart TV', precio: 3000},
    {nombre: 'Tablet', precio: 4000},
    {nombre: 'Audifonos', precio: 5000},
    {nombre: 'Teclado', precio: 6000},
    {nombre: 'iPhone', precio: 7000},
    {nombre: 'Macbook', precio: 8000},
]

// for(let i=0; i<arreglo.length;i++){
//     console.log(`${arreglo[i].nombre} - Precio: ${arreglo[i].precio}`);
// }

arreglo.forEach( function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})

/*------------------------------------------------------
                        .map
--------------------------------------------------------*/

const nuevoArreglo = arreglo.map( function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

const nuevoArreglo2 = arreglo.forEach( function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoArreglo);
//map crea un nuevo arreglo, foreach no.
console.log(nuevoArreglo2); //return undefined