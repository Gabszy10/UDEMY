const express = require('express');
const faker = require('faker');
const router = express.Router();
const Posts = require('../../models/Posts')

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';

    next();
})

router.get('/', (req, res) => {
    res.render('admin/index');
})

router.post('/generate-fake-posts', (req, res) => {

    for(let i = 0; i < req.body.amount; i++){
        let post = new Posts();

        post.title = faker.name.title();
        post.status = 'public';
        post.allowComments = faker.random.boolean();
        post.body = faker.lorem.sentences();

        post.save().then(savedPost => {
             res.redirect('/admin/posts')
        })
        .catch(err => console.log(err)
        )
    }

})

module.exports = router;