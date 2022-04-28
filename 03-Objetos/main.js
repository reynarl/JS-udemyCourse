const producto = {
    nombre: 'Manga BL',
    precio: 200,
    disponible: true
}

console.log(producto.nombre);
// console.log(producto['precio']);

/*--------------------------------------------------------
    Agregar o eliminar propiedades en un objeto 
--------------------------------------------------------*/

producto.imagen = 'imagen.jpg'
delete producto.disponible

console.log(producto);


/*--------------------------------------------------------
    Destructuring de un objeto:
--------------------------------------------------------*/

//Extrae los valores existentes de un objeto
const { nombre, precio, imagen } = producto
console.log(precio);


/*--------------------------------------------------------
    Objetos dentro de objetos:
--------------------------------------------------------*/
const productoDos = {
    nombreDos: 'dvds',
    precioDos: 300,
    cantidadDos: 3,
    informacion: {
        tamaño: 'grande',
        medida: '20cm',
        fabricacion:{
            pais: 'México',
            estado: 'Chiapas',
            ciudad: 'Tuxtla Gtz'
        }
    }
}
//destructuring
const { informacion:{fabricacion:{pais}}, cantidadDos } = productoDos
console.log(pais,cantidadDos);

/*--------------------------------------------------------
    Congelar un objeto para no poder modificarlo
    freeze: no se pueden agregar, modificar ni eliminar propiedades
--------------------------------------------------------*/
// Object.freeze( productoDos )

// delete productoDos.nombre
// productoDos.nuevo = 'nuevo'

// console.log(productoDos);
console.log(Object.isFrozen(productoDos));

/*--------------------------------------------------------
    Sellar un objeto
    seal: no se puede agregar ni eliminar pero si modificar
--------------------------------------------------------*/
// Object.seal(productoDos)

// productoDos.nombre = 'Manga Shoujo'
// delete productoDos.nombre
// productoDos.imagen = 'imagen.jpg'

// console.log(productoDos);
// saber si el objeto está sellado
console.log(Object.isSealed(productoDos));

/*--------------------------------------------------------
    Copiar/unir dos objetos
--------------------------------------------------------*/
//01. con assign
// const objetos = Object.assign(producto, productoDos)

//02. Con spread operator o rest operator
const resultado = {...producto, ...productoDos}
console.log(resultado);

/*--------------------------------------------------------
    funciones en objetos
--------------------------------------------------------*/

const objeto3 = {
    nombre: 'PC',
    precio: 12000,
    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} tiene un precio de $${this.precio}`);
    }
}

objeto3.mostrarInfo()

/*--------------------------------------------------------
    Object .keys, .values, y .entries
--------------------------------------------------------*/

//retorna un arreglo con las llaves del objeto, para saber si un objeto está vacio o no 
console.log(Object.keys(producto));

// retorna un arreglo con los valores que contiene cada llave
console.log(Object.values(producto));

//retorna toda la informacion
console.log(Object.entries(producto));


/*----------------------------------------------------------
     Acceder a propiedades: notación de corchetes
----------------------------------------------------------*/

//Buscar y retornar la propiedad del objeto
buscarSimboloQuimico = simbolo =>{

    const simbolos = {
        Al: 'Aluminio',
        Cl: 'Cloro',
        S: 'Azufre',
        He: 'Helio',
        B: 'Boro'
    }
    //usamos corchetes para acceder a la propiedad del objeto que es ingresado siendo string -> simbolos['Cl'] en lugar de simbolos.Cl ya al momento de poner el parámetro será de esta forma: 'Cl' por lo tanto usamos corchetes []
    return simbolos[simbolo]
}

console.log(buscarSimboloQuimico('Cl')) //return Cloro


/* ---------------------------------------------------------
                    hasOwnProperty
Para verificar si un objeto cuenta con esa propiedad*/

const miCuaderno ={
    color: 'Verde',
    paginas: 200,
    materia: 'Matematicas'
}

//ingresamos como parámetro el objeto del que queremos saber si tiene o no la propiedad, y la propiedad que queremos saber si existe.
verificarPropiedad = (objeto, propiedad) =>{
    if(objeto.hasOwnProperty(propiedad)){
        return `El objeto tiene la propiedad: ${propiedad} con el valor: ${objeto[propiedad]}`
    }else{
        return "El objeto no tiene esta propiedad"
    }
}

console.log(verificarPropiedad(miCuaderno, 'materia'))

/*----------------------------------------------------
                    Objetos complejos
----------------------------------------------------*/

const ordenesDePizzas = [
    {
        tipo: 'Peperoni',
        tamaño: 'individual',
        costo: 150,
        toppings: [
            'extra queso',
             'champiñones',
              'piña'
            ],
        paraLlevar: true
    },
    {
        tipo: 'Cuatro quesos',
        tamaño: 'Familiar',
        costo: 230,
        toppings: ['extra queso', 'pimientos'],
        paraLlevar: true
    }
]

// console.log(JSON.stringify(ordenesDePizzas[0]))

//diferentes formas de acceder a las propiedades dependiendo de si se encuentren dentro de objetos o arreglos

//accedemos al arreglo en la posicion 0 y obtenemos la propiedad tipo que se encuentra dentro de un objeto con:
//notacion de corchetes
console.log(ordenesDePizzas[0]['tipo'])
//notacion punto
console.log(ordenesDePizzas[0].tipo)
//destructuring
const {tipo, tamaño, costo, toppings} = ordenesDePizzas[0]
console.log(tipo)