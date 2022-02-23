import express, { json } from 'express'
import db from './database/db'
import router from './routes'

const app = express()
const PORT = 3333
 
app.use(json())
app.use(router)

app.listen(PORT, async() => {
    await db.sync()
    console.log(`Listening on port ${PORT}`)
})
