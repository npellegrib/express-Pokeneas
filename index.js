import express from 'express'
import web from './routes/web.js'

const app = express()
const port = 80 

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/', web)

app.listen(port, () => {
    console.log(`Running aplication in port ${port}`)
})