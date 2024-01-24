//asynchronous read/write function of fs
//As we can see the console statements are in the order: start, done writing, starting next task. However, 
//when they are printed, it will be in the order: start, starting next task, done writing.
//This ensures that a client wont wait unnecessarily when something is written to a file

const { readFile, writeFile } = require('fs')

console.log('start')

readFile('./content/first.txt', 'utf8', (err, result) => { //callback
    if (err) {
        console.log(err)
        return
    }
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => { //nested to ensure that this read is executed only after executing the first read
        if (err) {
            console.log(err)
            return
        }
        const second = result;

        writeFile('./content/result-async.txt', `Here is the result ${first} , ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('done writing')
        })
    })
})

console.log('starting next task')