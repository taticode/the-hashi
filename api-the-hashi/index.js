console.clear()

const express   = require('express')
const cors      = require('cors')
const mongoose  = require('mongoose')
      mongoose.set('strictQuery', true)

const router    = require('./router/router')

const main = async () => await mongoose.connect(`mongodb://127.0.0.1:27017/the-hashi` , {} , ()=>{
    console.log(`📖MongoDB Conectado`)
})

const app = express()

main().catch( err => console.log( err ))

app.use( cors() )
app.use( express.json() )
app.use( express.urlencoded({ extended : false }))
app.use( router )

app.listen( 4000 , () => {
    console.log(`🔰Iniciando Servidor API`)
})