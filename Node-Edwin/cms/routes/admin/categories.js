const express = require('express');
const router = express.Router();
const faker = require('faker');
const Category = require('../../models/Category');

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';

    next();
})

router.get('/', (req, res) => { 

        Category.find({}).then(categories => {
            res.render('admin/categories/index', {categories})
        });
    
});

router.post('/create', (req, res) => {

        const newCategory = Category({
            name: req.body.name
        });

        newCategory.save().then(savedCategory => {

            res.redirect('/admin/categories');

        })
        .catch(err => console.log('error',err))
})

router.get('/edit/:id', (req, res) => {

   Category.findOne({_id: req.params.id}).then(category => {
        res.render('admin/categories/edit', {category})
   })
})

router.put('/edit/:id', (req, res) => {

    Category.findOne({_id: req.params.id}).then(category => {

        category.name = req.body.name;

        category.save().then(savedCat => {
            res.redirect('/admin/categories')
        })
         
    })
 })

 router.delete('/delete/:id', (req, res) => {

    Category.remove({_id: req.params.id}).then(result => {
            res.redirect('/admin/categories');
    })

 })

module.exports = router;