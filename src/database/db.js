const mongoose = require('mongoose')

function connect() {
    mongoose.connect('mongodb://127.0.0.1:27017/api-restful', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    
    const db = mongoose.connection
    
    db.once('open', () => { // uma vez que conectar, execute um callback
        console.log('Connected to database!')
    })
    
    db.on('error', console.error.bind(console, 'connection error: ')) // pagina de erro
}

module.exports = {
    connect
}