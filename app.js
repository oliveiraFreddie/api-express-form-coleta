const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.use(express.json())

app.listen(3000, function() {
    console.log('Servidor Online!!!') 
})

// DB Connection
const conn = require("./db/conn")

conn();

// 270Ab9HxPyisvaQK

// freddieoliveira95

// mongodb+srv://freddieoliveira95:<password>@cluster0.ggxjwnd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0