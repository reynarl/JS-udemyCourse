
function dataBase(){
  //crear base de datos version 1.0
  let miDB = window.indexedDB.open('',1)

  // si hay un error, en caso de que el navegador no soporte indexedDB
  miDB.onerror = () => {
    console.log('Hubo un error')
  }

  //si la bd se crea correctamente
  miDB.onsuccess = () => console.log('Base de datos creada correctamente')

  // configuracion de la BasedeDatos
  // esto se ejecuta una sola vez al crear la base de datos
  miDB.onupgradeneeded = (e) => {
    const db = e.target.result

    const objectStore = db.createObjectStore('miDB', {
      keyPath: 'miDB',
      autoIncrement: true
    })

    //definir columnas
    objectStore.createIndex('nombre', 'nombre', {unique: false})
    objectStore.createIndex('email','email', {unique: true})
  }
}

dataBase()

