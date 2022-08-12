import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()
app.use(morgan('dev'))
app.use(cors())

app.listen(3000)
console.log('Server listen on port', 3000)