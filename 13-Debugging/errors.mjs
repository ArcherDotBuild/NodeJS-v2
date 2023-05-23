import { readFile } from 'fs/promises'

const result = await readFile(new URL('app.mj', import.meta.url), 'utf-8')
console.log('hello')
