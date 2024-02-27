const express = require('express') // import express

const { readdirSync } = require('fs') // method is used to read files on your computer

const morgan = require('morgan') // import morgan

const cors = require('cors')  // Cross origin - security feature  //import cors

const bodyParse = require('body-parser')

const connectDB = require('./Config/db')


const app = express()

connectDB()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json())


// การเรียกใช้ Router auto ภายใต้โฟล์เดอร์ Routes
readdirSync('./Routes')
    .map((r) => app.use('/api', require('./Routes/'+ r)))

app.listen(5000,() => console.log('Server is Running on port 5000'))