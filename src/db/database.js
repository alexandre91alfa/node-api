const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const config = {
    uri: "mongodb://localhost:27019/nodeapi",
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}

const conn = mongoose.connection

conn.on('open', () => {
    console.log('Sucecessfully connected to database')
})

conn.on('erro', () => {
    throw new Error('Could not connect to mongoDB')
})

module.exports = {
    connect: () => mongoose.connect(config.uri, config.options)
}