// Example 1
// ####################
// Using callback
// import { readFile } from 'fs'

// readFile(new URL('app.mj', import.meta.url), 'utf-8', (err, data) => {
//   if (err) {
//     console.error(err)
//   } else {
//     //
//   }
// })

// Example 2
// ####################
// Using callback
// If i wanted to do something with this, like let's say maybe i did want this to
// crash because this is a crucial piece of code
// import { readFile } from 'fs'

// readFile(new URL('app.mj', import.meta.url), 'utf-8', (err, data) => {
//   if (err) {
//     // The code won't go on, nothing's gonna be completed we are good to go
//     throw err
//   } else {
//     //
//   }
// })

// Example 3
// ####################
// Using promises
// If i wanted to do something with this, like let's say maybe i did want this to
// crash because this is a crucial piece of code
// import { readFile } from 'fs/promises'

// try {
//   const result = await readFile(new URL('app.mj', import.meta.url), 'utf-8')
// } catch (e) {
//   //  throw e
//   console.error(e)
//   console.log('hello')
// }

// Example 4
// ####################
// Handling errors you don't have control of the code as if you were using some type of library
// that's internal somewhere and you just don't have the ability to catch it somehow
import { readFile } from 'fs/promises'

process.on('uncaughtException', (e) => {
  console.log(e)
})

const result = await readFile(new URL('app.mj', import.meta.url), 'utf-8')
console.log('hello')

/*
The error was thrown, and there was nothing we can do about it. But, it did not actually
get caught cuz we didn't see line 9 move forward
*/
