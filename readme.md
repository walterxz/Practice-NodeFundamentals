# Fundamentos de node

En este repositorio se mustra lo desarrollado en el curso de fundamentos de node

## Globals

Los modulos globales son módulos del core.
Una de las funciones muy usadas en Node es setInterval, clearInterval, para evaluar en n tiempo si el servidor está caído o no.

## File System

El file system provee una API para interactuar con el sistema de archivos cerca del estándar POSIX.
POSIX es el estándar para interfaces de comando y shell, las siglas las significan: “Interfaz de sistema operativo portátil” la X de POSIX es por UNIX.

El file system nos permite acceder archivo del sistema, leer, modificar., escribirlos, es muy útil para precompiladores, para lo que requiera hacer grabados de disco, o bases de datos en node requieren un uso intensivo de Node.Todo lo que hagamos con modulos por buenas prácticas son asincronos, pero tienen una version sincrona no recomendada pues pordría bloquear el event loop con más facilidad.

## Console

Con console podemos imprimir todo tipo de valores por
nuestra terminal.

- console.log: recibe cualquier tipo y lo muestra en el consola.
- console.info: es equivalente a log pero es usado para informar.
- console.error: es equivalente a log pero es usado para errores.
- console.warn: es equivalente a log pero es usado para warning.
- console.table: muestra una tabla a partir de un objeto.
- console.count: inicia un contador autoincremental.
- console.countReset: reinicia el contador a 0.
- console.time: inicia un cronometro en ms.
- console.timeEnd: Finaliza el cronometro.
- console.group: permite agrupar errores mediante identación.
- console.groupEnd: finaliza la agrupación.
- console.clear: Limpia la consola.

## Errores (try/catch)

Cuando se genera un error, node propaga el error hacia arriba, hasta que esta es caputado. si el error no se captura node se detiene.
Siempre que sea posible debemos capturar todos los errores que se puedan generar en nuestros hilos.
(try/catch) Nos permite caputar los errores.

## Child Process
El módulo de procesos secundarios de Node.js (child_process) tiene dos funciones spawn y exec, mediante las cuales podemos iniciar un proceso secundario para ejecutar otros programas en el sistema.

La diferencia más significativa entre child_process.spawn y child_process.exec está en lo que spawn devuelve un stream y exec devuelve un buffer.

- Usa spawn cuando quieras que el proceso hijo devuelva datos binarios enormes a Node.
- Usa exec cuando quieras que el proceso hijo devuelva mensajes de estado simples.
- Usa spawn cuando quieras recibir datos desde que el proceso arranca.
- Usa exec cuando solo quieras recibir datos al final de la ejecución.

## HTTP

Node nos ofrece el modulo HTTP el cual nos permite principalmente crear un servidor en nuestro computador.
En este modulo encontraremos todo lo necesario que necesitamos para crear un sistema de rutas, que responderá cada ruta, los header que podrá mandar, etc.
Uno de los métodos principales de este modulo es createServer, el cual nos permitirá abrir un puerto para crear el servidor.

## OS

El modulo de OS, Operative System, nos permite ejecutar acciones de más bajo nivel en nuestro sistema, permitiéndonos conocer una gran variedad de detalles del mismo.
Como la memoria disponible que tiene, el total de la memoria, la interfaz de red, etc.
Esto nos será de gran ayuda a la hora de ejecutar o crear proyectos que necesiten información de una maquina para ejecutar una operación.

## Process

El objecto process es una instancia de EventEmitter; podemos suscribirnos a el para escuchar eventos de node.

UncaughtException: Permite capturar cualquier error que no fue caputurado previamente. Esto evita que Node cierre todos los hijos al encontrar un error no manejado.