require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

const indexRouter = require('./routes')
const usersRouter = require('./routes/users')
const cartRouter = require('./routes/cart')
const productsRouter = require('./routes/products')

const mongoConfig = {
  uri: process.env.MONGO_URI,
  options:  {
    useNewUrlParser: true
  },
}

// Connect to database
mongoose.connect(mongoConfig.uri, mongoConfig.options)
mongoose.connection.on('error', function (err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
  }
);

if (process.env.RUN_MIGRATIONS) {
  require('./seed')()
}

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/api/products', productsRouter)
app.use('/api/cart', cartRouter)

module.exports = app
