//path module
//used in managing and altering file paths

const path = require('path')


console.log(path.sep) //path to the current file

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath) //will join the paths and gives a combined path

const base = path.basename(filePath)
console.log(base) //test.txt is the base

//path.resolve returns an absolute path(full path. Ex: users/apple/desktop, etc...)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)