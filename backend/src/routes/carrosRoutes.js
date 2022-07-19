const express = require('express');
const CarrosController = require('../controllers/CarrosController');
const router = express.Router();

router.post('/add', CarrosController.add);
router.get('/list', CarrosController.list);
router.get('/list/:id', CarrosController.getId);
router.delete('/delete/:id', CarrosController.deleteId);
router.put('/list/:id', CarrosController.updateId);

module.exports = router;