const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    ano: Number,
    cor: String,
    preco: Number,
    contato: String
});

const modelName = "carros";
if(mongoose.connection && mongoose.connection.models[modelName]) {
    module.exports = mongoose.connection.models[modelName];//se estiver conectado e já existir entao ele usa o modelo
} else{
    module.exports = mongoose.model(modelName, modelSchema);//se não existir o nó carros, então ele adiciona
}