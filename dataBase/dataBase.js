const mongoose = require('mongoose')

// Creating a variable with the name of my project's database:
const data_base_name = 'proyecto-registro'

// Connecting to my database in MongoDB:
mongoose.connect(`mongodb://localhost/${data_base_name}`, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function() {console.log(`Connected to '${data_base_name}' database in MongoDB`)})