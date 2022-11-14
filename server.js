const express = require('express')
const app = express()
const router = require('./config/router')
app.set(express.static('public'))
app.set('views engine', 'ejs')

app.use(express.urlencoded({extended:true}))

require('./config/mongoose')

app.use(router)

app.listen (5000) 
