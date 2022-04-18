/*------------------------------------------------------
    Function declaration and function expression
--------------------------------------------------------*/

//Declaracion de funcion (Function declaration)
function suma(){
    console.log(2+3);
}

suma()

//Expresion de Función (Function expression)
const sumar = function(){
    console.log(3+10);
}

sumar()

/*------------------------------------------------------
                Parámetros por default
--------------------------------------------------------*/

function saludar(nombre = 'Desconocido',apellido = ''){
    return `Hola ${nombre} ${apellido}`
}

//si a no paso algun parametro a la funcion, entonces tomará los valores que pusimos antes
console.log(saludar('Reyna'))

/*------------------------------------------------------
            Como se comunican las funciones
--------------------------------------------------------*/
function iniciarApp(){
    console.log('iniciando parte 1/2...');
    segundaFunc()
}

function segundaFunc(){
    console.log('Iniciando parte 2/2');
    usuarioAuth('Reyna')
}

function usuarioAuth(usuario)
{
    console.log('Autenticando usuario...');
    console.log(`Usuario: ${usuario} autenticado exitosamente`);
}
//funcion de inicio
iniciarApp()

/*------------------------------------------------------
    Ejemplo con multiples funciones que se pasan valores
--------------------------------------------------------*/
let total = 0
function agregarCarrito(precio){
    return total += precio
}

function calcularImpuesta(total){
    return total * 1.15
}

total = agregarCarrito(200)
total = agregarCarrito(200)

const totalPagar = calcularImpuesta(total)

console.log(totalPagar);

/*------------------------------------------------------
    Añadir funciones en un objeto
--------------------------------------------------------*/

// const reproductor = {
//     reproducir: function(id){
//         console.log(`reproduciendo pista: ${id}`);
//     },
//     pausar: function(){
//         console.log('pausando...');
//     },
//     borrar: function(id){
//         console.log(`borrando pista: ${id}`);
//     }
// }

// //añadiendo nuevo método al objeto
// reproductor.crearPlaylist = function(nombre){
//     console.log(`Creando lista de reproducción: ${nombre}`);
// }

// reproductor.reproducirPlaylist = function(nombre){
//     console.log(`Reproduciendo ${nombre}`);
// }

// reproductor.reproducir(10)
// reproductor.pausar()
// reproductor.borrar(10)
// reproductor.crearPlaylist('Nuevas canciones')
// reproductor.reproducirPlaylist('Nuevas canciones')

/*------------------------------------------------------
                    Arrow functions
--------------------------------------------------------*/

const aprendiendo = function(){
    console.log('arrow functions');
}

// si la funcion es de solo una línea, omitimos las llaves {}
const aprendiendo2 = () => console.log('arrow functions');
aprendiendo2()

// si solo pasamos un parámetro, los parentesis son opcionales
// const aprender = (lenguaje) => console.log(`Aprendiendo ${lenguaje}`);
const aprender = lenguaje => console.log(`Aprendiendo ${lenguaje}`);
aprender('Javascript')

/*------------------------------------------------------
            Arrow functions: usando map y forEach
--------------------------------------------------------*/

const carrito = [
    {nombre: 'TV', precio: 2000},
    {nombre: 'smartTV', precio: 7000},
    {nombre: 'Tablet', precio: 6000}
]

const nuevoArreglo = carrito.map( producto => `${producto.nombre} - precio: ${producto.precio}`)

carrito.forEach( producto =>
    console.log(`${producto.nombre} - precio: ${producto.precio}`)
)

console.log(nuevoArreglo);

//---------------------------------------------------------

const reproductor = {
    cancion: '',
    reproducir: id => console.log(`reproduciendo pista ${id}`),
    pausar: () => console.log('pausando...'),

    set nuevaCancion(cancion){
        this.cancion = cancion
        console.log(`Añadiendo ${this.cancion}`);
    },

    get obtenerCancion(){
        console.log(this.cancion);
    }
}

//añadiendo nueva funcion al objeto
reproductor.borrar = id => console.log(`borrando pista ${id}`)

//set nuevaCancion , añadir una cancion
reproductor.nuevaCancion = 'Haru Haru'
//get obtenerCacion
reproductor.obtenerCancion

reproductor.reproducir(14)
reproductor.pausar()
reproductor.borrar(14)