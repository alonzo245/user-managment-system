const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb://${process.env.MONGO_URI}`, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
        console.log(`Error: ${err.message}`)
    }
}

module.exports = connectDB
