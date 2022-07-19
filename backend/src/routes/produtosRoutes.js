const express = require('express');
const ProdutosController = require('../controllers/ProdutosController');
const router = express.Router();

router.post('/add', ProdutosController.add);
router.get('/list', ProdutosController.list);
router.get('/list/:id', ProdutosController.getId);
router.delete('/delete/:id', ProdutosController.deleteId);
router.put('/list/:id', ProdutosController.updateId);
router.get('/list/preco/:categoria/:valor', ProdutosController.listValor);

module.exports = router;