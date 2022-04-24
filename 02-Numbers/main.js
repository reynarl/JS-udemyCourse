let resultado

resultado = Math.PI

//redondear
resultado = Math.round(2.2) //return -> 2
resultado = Math.round(4.6) //return -> 5

//redondear hacia arriba -> return: 3
resultado = Math.ceil(2.1)
//redondear hacia abajo -> return: 2
resultado = Math.floor(2.8)

console.log(resultado)


const num = 100
//raiz cuadrada
console.log(Math.sqrt(num))
//Valor absoluto
console.log(Math.abs(-40))
//Potencia: recibe como parámetros el número que quiero elevar y la potencia
console.log(Math.pow(num, 2))


let arrayNums = [1,2,4,20,10,5,7,0]
//Máximo: regresa el número mayor
console.log(Math.max(...arrayNums))
//Mínimo: regresa el número menor
console.log(Math.min(...arrayNums))

/*----------------------------------------*/
//Aleatorio, redondenado hacia arriba con un dígito del 1 al 10
result = Math.ceil(Math.random()*10)
//*100 -> dos dígitos, numeros del 1 al 100
result = Math.ceil(Math.random()*100)
console.log(result)

