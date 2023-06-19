const router = require('express').Router()


// VERBOS HTTP (4 TIPOS)
// GET - obter dados
// POST - enviar/receber dados
// PUT - atualizar dados
// DELETE - deletar dados

const ProductController = require('../controllers/products')

router.get('/products', ProductController.get)
//router.get('/products', ProductsController.post)
//router.get('/products/:id', ProductsController.put)
//router.get('/products/:id', ProductsController.delete)

module.exports = router