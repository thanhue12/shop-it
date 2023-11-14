const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, { // if online db is used write process.env.DB_URI 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(con => {
        console.log(`MongoDB database connected with HOST: ${con.connection.host}`)
    })
}

module.exports = connectDatabase