const express = require('express');
const ProductsService = require('./../services/product.service')

const router= express.Router();
const service = new ProductsService();

router.get('/', (req, res) =>{
    const product = service.find();
    res.json(product)
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const product = service.findOne(id);
    res.json(product);
})

router.post('/', (req, res) => {
    const body = req.body;
    const product = service.create(body);
    res.status(201).json(product)
})
router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const body = req.body;
    const product = service.update(id,body);
    res.status(201).json(product)
})
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const product = service.delete(id);
    res.status(204).json(product)
})

module.exports = router;