const fs = require('fs')
const ruta = __dirname + '/files/lectura.txt'
const contenido = 'Escribiendo en archivo'

escribir(ruta, contenido)

leer(ruta, (text) => {
  console.log('Termine de leer: ' + text)
})

borrar(ruta, () => {
    console.log('Se ha borrado :v')
})

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    cb(data.toString())
  })
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function (err) {
    if (err) {
      console.error('No he podido escribirlo', err)
    } else {
      console.log('Se ha escrito correctamente')
    }
  })
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb)
}
