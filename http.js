const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page ')
    }
    if (req.url==='/about') {
        res.end('This is our short history')
    }
    res.end(`
        <h1>Ooops</h1>
        <p>Can't find the page your are looking for</p>
        <a href ='/'>Back home</a>
    `)
});
server.listen(5000)