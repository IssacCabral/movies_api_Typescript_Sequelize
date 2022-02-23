import express from 'express'
import db from './database/db'
import router from './routes'
import bodyParser from 'body-parser'
const app = express()
const PORT = 3333

// body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(router)

app.listen(PORT, async() => {
    await db.sync()
    console.log(`Listening on port ${PORT}`)
})
