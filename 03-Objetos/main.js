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