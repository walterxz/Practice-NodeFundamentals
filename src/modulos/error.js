const badfunction = () => 5 + z
try {
  badfunction()
} catch (error) {
  console.log('bad function ha fallado')
  console.error(error.message)
}
console.log('continuamos...')


function badfunction2() {
  setImmediate(() => {
    try {
      return 5 + z
    } catch (error) {
      console.log('bad function Async ha fallado')
      console.error(error.message)
      console.log('continuamos...')
    }
  })
}
badfunction2()