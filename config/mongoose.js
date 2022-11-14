const mongoose = require('mongoose')

const db = "mongodb+srv://OlhaHr:Hathor777@cluster3.uz5actx.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(db)
.then (() => console.log('DB is work'))
.catch(err => console.log(err))
