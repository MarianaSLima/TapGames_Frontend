const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    categoria: String,
    marca: String,
    nome: String,
    tamanho: String,
    embalagem: String,
    preco: Number
    
});

const modelName = "produtos";
if(mongoose.connection && mongoose.connection.models[modelName]) {
    module.exports = mongoose.connection.models[modelName];//se estiver conectado e já existir entao ele usa o modelo
} else{
    module.exports = mongoose.model(modelName, modelSchema);//se não existir o nó produtos, então ele adiciona
}