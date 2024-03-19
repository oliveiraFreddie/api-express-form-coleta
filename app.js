const express = require("express");
const cors = require("cors");
const app = express();

// Importar o roteador principal das rotas
const routes = require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Usar o roteador principal no Express
app.use("/api", routes);

app.listen(3000, function() {
    console.log('Servidor Online!!!');
});

// DB Connection
const conn = require("./db/conn");
conn();


// 270Ab9HxPyisvaQK

// freddieoliveira95

// mongodb+srv://freddieoliveira95:<password>@cluster0.ggxjwnd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0