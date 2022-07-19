const mongoose = require('mongoose');
const Produtos = require('../models/Produtos'); //importando o modelo de produtos

module.exports = {
    add: async (req, res) => {
        const {categoria, marca, nome, tamanho, embalagem, preco} = req.body;
        let addProduto = new Produtos({categoria, marca, nome, tamanho, embalagem, preco});
        const saveProdutos = await addProduto.save();
        if(!saveProdutos) {
            res.json({
                error: 'Erro ao adicionar produto'
            });
        }else {
            res.json({
                data: saveProdutos
            });
        }
    },
    list: async(req, res) => {
        const listProdutos = await Produtos.find();
        if(!listProdutos){
            res.json({
                error: 'Erro ao recuperar os registros'
            });
        }else {
            res.json({
                data: listProdutos
            })
        }
        
    },
    getId: async(req, res) => {
        const id = req.params.id;
        const listProdutos = await Produtos.findById(id);
        if(!listProdutos){
            res.json({
                error: 'Erro ao recuperar os registros'
            });
        }else {
            res.json({
                data: listProdutos
            })
        }
    },
    deleteId: async(req, res) => {
        const id = req.params.id;
        const listProdutos = await Produtos.findByIdAndDelete(id);
        if(!listProdutos){
            res.json({
                error: 'Erro ao recuperar os registros'
            });
        }else {
            res.json({
                data: listProdutos
            })
        }
    },
    updateId: async(req, res) => {
        const id = req.params.id;
        const {categoria, marca, nome, tamanho, embalagem, preco} = req.body;

        const produtoUpdate = await Produtos.findByIdAndUpdate(id, {categoria, marca, nome, tamanho, embalagem, preco});

        if(!produtoUpdate) {
            res.json({
                erro: 'Não foi possivel localizar o produto'
            });
        } else {
            res.json({
                data:produtoUpdate
            });
        }
    },

    listValor: async(req, res) => {
        const valor = req.params.valor;
        const categoria = req.params.categoria;
        const listProdutos = await Produtos.find({preco: { $gte: valor }, categoria: categoria}).exec();
        if(!listProdutos){
            res.json({
                error: 'Erro ao recuperar os registros'
            });
        }else {
            res.json({
                data: listProdutos
            })
        }
        
    },

}