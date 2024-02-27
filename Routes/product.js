
const express = require('express');
const router = express.Router();

// Import Function from folder Controllers file product.js
const { read, list, create, update, remove } = require('../Controllers/product')

// http://localhost:5000/api/product

// การนำ Routes มาเรียกใช้งานผ่าน Router.Method
router.get('/product',list)
router.get('/product/:id',read)

router.post('/product',create)
router.put('/product/:id',update)
router.delete('/product/:id',remove)

module.exports = router