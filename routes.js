const fs = require('fs')

const requestHandler = (req, res) => {
    const { url, method } = req

    if (url === '/form') {
        res.write(`
        <html>
            <head><title>Enter Message</title></head>
            <body><form action="/message" method="POST"><input type="text" name="info"><button type="submit">Send</button></input></form></body>
        </html>
        `)
        return res.end()
    }
    
    if (url === '/message' && method === 'POST') {
    
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            // fs.writeFileSync('message.txt', message)
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            })
        })
    }
    
    res.setHeader('Content-Type', 'text/html')
    res.write(`
        <html>
            <head><title>My First Page</title></head>
            <body><h1>Hello from my Node.js server!</h1></body>
            <a href="/form" style="font-size: 30px; font-weight: bold">COME TO FORM</a>
        </html>
    `)
    res.end()
}

module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
}