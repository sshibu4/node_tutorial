//OS module
//gives info about the computers operating system

const os = require('os') //no "./". Therefore the node knows that we are looking for the built in os

//info about the current info
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)