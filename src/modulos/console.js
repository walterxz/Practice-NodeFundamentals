
function funcion1() {
  console.group('Funcion 1')
  console.log('esto es de funcion 1')
  console.log('esto es de funcion 1')
  funcion2()
  console.groupEnd('Funcion 1')
}

function funcion2() {
  console.group('funcion 2')
  console.log('esto es de funcion 2')
  console.groupEnd('funcion 2')
}

//AGRUPAR CON GROUP Y COMO FUNCIONA
console.log('Ver algo')
console.error('inscribe el error')
console.warn('Puede ser un warning')

console.group('-> EJEMPLO DE TABLA EN CONSOLA :')
var tabla = [
  { a: 1, b: 2 },
  { a: 5, b: 6 },
]

console.table(tabla) //sirve con arrays muy largos con muchas columnas.
console.groupEnd('-> EJEMPLO DE TABLA EN CONSOLA :')

//group permite dar identacion a lso consolog siguieenes hasta
//group end
console.group('conversacion:')
console.log('Hola')
console.log('Blabla')
console.log('Adios')
console.groupEnd('conversacion:')

funcion1()

//contdor de veces que se ejecuta el log
console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')
