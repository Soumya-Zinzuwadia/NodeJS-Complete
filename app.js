const path = require('path');


//3rd Party Packages 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

//Custom Files
const adminData = require('./routes/admin');
const shopData = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopData.routes);
app.use((req, res, next) => {

    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

});


app.listen(3000);
