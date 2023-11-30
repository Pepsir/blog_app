require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

// express app
const app = express();
const blogRoutes = require('./routes/blogRoutes')
const userRoutes = require('./routes/userRoutes')

//middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/blogs', blogRoutes)
app.use('/users', userRoutes)

// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen to request
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


