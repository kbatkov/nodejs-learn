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

app.set('view engine', 'pug')
app.set('views', 'views')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const errorsController = require('./controllers/errors')

app.use(bodyParser.urlencoded({extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(errorsController.get404)

app.listen(3000)