// Importing express and creating variable 'app':
const express = require('express')
const app = express()

// Connection to MongoDB database:
require('./dataBase/dataBase')

// Middleware to be able to receive JSON from the request body:
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// Routes:
const userRoutes = require('./components/users/routes')

// Use of routes in express:
app.use('/users', userRoutes)

// Configuring a path and a folder for static files:
app.use('/profile_pics', express.static('profile_pic'))

// Binding and listening to connections at the specified port and host:
const PORT = 3000
app.listen(PORT, (err) => {
    if (err) {console.log('Error in Express server setup.')}
    console.log(`Server listening on port ${PORT}\nAplication running on http://localhost:${PORT}`)
})