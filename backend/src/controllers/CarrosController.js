const Carro = require('../models/Carro');
let RentCar = require('../models/RentCar');

const mongoose = require('mongoose');
const Carros = require('../models/Carros') //importei meu modelo de carros

module.exports = {
    add: async (req, res) => {
        const {marca, modelo, ano, cor, preco, contato} = req.body;
        let addCarro = new Carros({marca, modelo, ano, cor, preco, contato});
        const saveCarro = await addCarro.save();
        if(!saveCarro) {
            res.json({
                error: 'Erro ao adicionar um carro'
            });
        }else {
            //RentCar.push(addCarro);
            res.json({
                data: saveCarro
            });
        }
    },
    list: async(req, res) => {
        const listCarros = await Carros.find();
        if(!listCarros){
            res.json({
                error: 'Erro ao recuperar os registros'
            });
        }else {
            res.json({
                data: listCarros
            })
        }
        
    },
    getId: async(req, res) => {
        const id = req.params.id;
        const listCarros = await Carros.findById(id);
        if(!listCarros){
            res.json({
                error: 'Erro ao recuperar os registros'
            });
        }else {
            res.json({
                data: listCarros
            })
        }
    },
    deleteId: async(req, res) => {
        const id = req.params.id;
        const listCarros = await Carros.findByIdAndDelete(id);
        if(!listCarros){
            res.json({
                error: 'Erro ao recuperar os registros'
            });
        }else {
            res.json({
                data: listCarros
            })
        }
    },
    updateId: async(req, res) => {
        const id = req.params.id;
        const {marca, modelo, ano, cor, preco, contato} = req.body;

        const carroUpdate = await Carros.findByIdAndUpdate(id, {marca, modelo, ano, cor, preco, contato});

        if(!carroUpdate) {
            res.json({
                erro: 'Não foi possivel localizar o carro'
            });
        } else {
            res.json({
                data:carroUpdate
            });
        }
    }




    

    //recuperar lista de carros
    //recuperar carro pelo id
    //alterar cadsatro carro
    //deletar carro
}