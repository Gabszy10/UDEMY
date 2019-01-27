const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/swag-shop', {useNewUrlParser: true});

var Product = require('./model/product');
var WishList = require('./model/wishlist');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/product', (req, res) => {
    let product = new Product();
    product.title = req.body.title;
    product.price = req.body.price;

    product.save().then((savedProduct) => {
        res.status(200).send(savedProduct);
    })
    .catch((err) => {
        res.status(500).send({error: 'Could not saved product'})
    })
})

app.get('/product', (req, res) => {
    Product.find({}).then((product) => {
        res.send(product);
    })
    .catch((err) => {
        res.status(500).send({error: 'Could not find products'})
    })
});

app.get('/wishlist', (req, res) => {
    WishList.find({}).populate({path:'products', model: 'Product'}).exec().then((wishLists) => {
        res.send(wishLists)
    })
    .catch((err) => {
        res.status(500).send({error: 'Could not find wishlist'})
    })
});

app.put('/wishlist/product/add', (req, res) => {
    Product.findOne({_id: req.body.productId}).then((product) => {
        WishList.update({_id:req.body.wishListId}, {$addToSet : {products: product._id}}).then(wishList => {
            res.send(wishList);
        })
        .catch(err => {
            res.status(500).send({error: 'Could not add item to wishlist'})
        })
    })
    .catch((err) => {
        res.status(500).send({error: 'Could not add item to wishlist'})
    })
});

app.post('/wishlist', (req, res) => {
    var wishList = new WishList();
    wishList.title = req.body.title;

    wishList.save().then((newWishList) => {
        res.send(newWishList);
    })
    .catch((err) => {
        res.status(500).send({error: 'Could not saved wishlist'})
    })
})

app.listen(3000, () => {
    console.log('Swag shop api running at port 3000...');
    
})