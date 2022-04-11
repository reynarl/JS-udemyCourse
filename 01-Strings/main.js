const producto = 'Mangas y Animes'
const producto2 = 'También Dvds'

//01. length & template strings
console.log(`Palabra: ${producto}
Cantidad de palabras:${producto.length}`)

//Concatenar un string
console.log(producto.concat(producto2))
console.log(`Se venden ${producto}. ${producto2}`)

/*---------------------------------------------------------*/
//Busca el primer caracter que coincida y muestra la posicion en la que se encuentra, regresa -1 si no se encuentra el valor
console.log(producto.indexOf('o'))
//Busca la palabra dentro del string, devuelve true o false,(afectan minusculas y mayus)
console.log(producto.includes('Mangas'))

/*---------------------------------------------------------*/
//02. Quitar espacios en strings
const stringWithSpace = '  Hola! Reyna del Carmen  '
console.log(stringWithSpace)
//Quita el espacio en blanco solo del inicio
console.log(stringWithSpace.trimStart())
//Quita el espacio en blanco solo del final
console.log(stringWithSpace.trimEnd())
//quita el espacio de ambos lados
console.log(stringWithSpace.trim())


/*---------------------------------------------------------*/
//03.
const msg = 'Venta de mangas y figuras '

console.log(msg.replace('Venta','Exposición'))

console.log(msg.slice(9,15))

/*Substring y slice hacen lo mismo a diferencia de:
Si pasamos como parámetros un numero mayor primero y luego uno menor, slice no hace nada, pero substring trata de acomodar los parámetros de forma automática*/
console.log(msg.slice(5,0))
console.log(msg.substring(5,0))
//extraemos una letra en la posicion especificada
console.log(msg.charAt(0))

//repite el string la cantidad de veces que desees
console.log(`${msg.repeat(2)}!!`)

/*---------------------------------------------------------*/
console.log(msg.toUpperCase())
console.log(msg.toLowerCase())