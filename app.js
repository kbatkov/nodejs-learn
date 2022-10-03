// const http = require('http')
// const routes = require('./routes')

// console.log(routes.someText)

// const server = http.createServer(routes.handler)

// server.listen(3000)


const http = require('http')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// app.use((req, res, next) => {
//     console.log('In the middleware')
//     next()
// })

app.use(bodyParser.urlencoded({extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.router)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

// const server = http.createServer(app)

// server.listen(3000)

app.listen(3000)