//HTTP module
//allows us to set up a web server

const http = require('http')

//createServer is looking for call back
//first parameter represents the incoming request
//second parameter represents the response sent back
const server = http.createServer((req, res) => {
    //console.log(req)
    if (req.url === '/') {
        res.end("Welcome to our home page")//ending the request
    }

    else if (req.url === '/about') {
        res.end('Here is our short History')
    }
    res.end(`
    <h1>Oops! </h1>
    <p>We can't find the link that you are looking for </p>
    <a href = "/">back home</a>
    `)
})

//port the server is going to listen to
server.listen(3000)
