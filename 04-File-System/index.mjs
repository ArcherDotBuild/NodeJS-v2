// Example 1
// ####################
// import fs from 'fs'
// console.log(fs);

// Example 2
// ####################
// fs modules with promises
// import { readFile } from 'fs/promises'

// console.log(import.meta.url);

// Example 3
// ####################
// import { readFile } from 'fs/promises'
// readFile takes 2 arguments
// 1. The file name that we want
// 2. Then we wanna set the base, (the path to this file)
// const template = await readFile(new URL('template.html', import.meta.url))
// console.log(template);

// Convert buffer to a string
// Couple ways to do this

// 1. Using the toString method
// console.log(template.toString());

// 2. Passing the encoding
// readFile(new URL('template.html', import.meta.url)) // Before adding the encoding
// new URL('template.html', import.meta.url), 'utf-8') // After adding the encoding

// // Example 4
// // ####################
// import { readFile } from 'fs/promises'
// let template = await readFile(
//   new URL('template.html', import.meta.url),
//   'utf-8'
// )

// // Our data
// const data = {
//   title: 'Learn NodeJS',
//   body: 'This is the final HTML',
// }

// // Loop over this data and then just replace every single instance of the placeholders
// // that match the key inside this

// for (const [key, value] of Object.entries(data)) {
//   template = template.replace(`{${key}}`, value)
// }

// console.log(template)

// Example 5
// ####################
import { readFile, writeFile } from 'fs/promises'
let template = await readFile(
  new URL('template.html', import.meta.url),
  'utf-8'
)

const data = {
  title: 'Learn NodeJS',
  body: 'This is the final HTML',
}

for (const [key, value] of Object.entries(data)) {
  template = template.replace(`{${key}}`, value)
}

// The next we need to do is we need to write this file back to disk

// This will make the index.html being written to the disk
await writeFile(new URL('index.html', import.meta.url), template)