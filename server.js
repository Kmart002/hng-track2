require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.once('open', ()=> console.log('Connected to database'))

app.use(express.json())

const usersRouter = require('./routes/persons')
 app.use('https://hng-track2.onrender.com/api', usersRouter)

app.listen(port,() =>console.log('server is running') )