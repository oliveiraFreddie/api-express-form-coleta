const moongose = require("mongoose")

async function main() {
    try {
        await moongose.connect("mongodb+srv://freddieoliveira95:270Ab9HxPyisvaQK@cluster0.ggxjwnd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

        console.log("Conectado ao DB!")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main