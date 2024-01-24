//FS module
//used to work with file system of a computer

//can do it synchronously(blocking) and asynchronously(non-blocking)

const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8') //reading a file
const second = readFileSync('./content/second.txt', 'utf8')

//writing to a file. First param: path, second param: what to write
writeFileSync('./content/result.txt', `Here is the result: ${first}, ${second}`)

console.log(first, second)

