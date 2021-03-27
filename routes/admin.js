const express = require('express');
const router = express.Router();

const path = require('path');


const rootDir = require('../util/path');


router.post('/product', (req, res) => {
    console.log(JSON.stringify(req.body));
    res.redirect('/');
});

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

    // res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});


module.exports = router;