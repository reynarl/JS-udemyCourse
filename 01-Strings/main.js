const producto = 'Mangas y Animes'
const producto2 = 'Dvds'

//length
console.log(`Palabra: ${producto}
Cantidad de palabras:${producto.length}`)

//Busca el primer caracter que coincida y muestra la posicion en la que se encuentra, regresa -1 si no se encuentra el valor
console.log(producto.indexOf('o'))
//Busca la palabra dentro del string, devuelve true o false,(afectan minusculas y mayus)
console.log(producto.includes('Mangas'))