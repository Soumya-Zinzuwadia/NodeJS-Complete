const express = require('express');
const router = express.Router();

const path = require('path');


const rootDir = require('../util/path');

const products = [];

router.post('/product', (req, res) => {
    products.push({
        title: req.body.title
    });
    // console.log(JSON.stringify(req.body));
    res.redirect('/');
});

router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));   
    res.render('add-product');

});


exports.routes = router;
exports.products = products;