const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const app = express()

const userRoute = require('./routes/user')
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Access-Token');
    next();
});

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app
    .use(express.json())
    .use('/api/v1/users', userRoute)


connectDB().then(() => {
    const PORT = process.env.SERVER_PORT || 3001
    app.listen(PORT,
        () => console.log(`Example app listening on port ${PORT}!`)
    )
})
