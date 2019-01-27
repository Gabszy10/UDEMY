const express = require('express');
const router = express.Router();
const Post = require('../../models/Posts');
const {isEmpty, uploadDir} = require('../../helpers/upload-helpers');
const fs = require('fs');
const path = require('path');


router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';

    next();
})

router.get('/', (req, res) => {

    Post.find({}).then(posts => {

        res.render('admin/posts', {posts});

    })
    .catch(err => console.log(err))
    
})

router.get('/create', (req, res) => {
    res.render('admin/posts/create');
})

router.post('/create', (req, res) => {

    let errors = [];

    if(!req.body.title){
        errors.push({message: 'Please add a title'});
    }

    if(!req.body.body){
        errors.push({message: 'Please add a body'});
    }

    if(errors.length > 0){
        res.render('admin/posts/create', {
            errors:errors
        })
    }

    else
    {
        let filename = 'BMW-Z4.jpg';

        if(!isEmpty(req.files)){
            let file = req.files.file;
            filename = Date.now() + '-' + file.name;
            
            file.mv('./public/uploads/' + filename, (err) => {
                if(err) throw err;
            })
        }

    

        let allowComments = true;

        if(req.body.allowComments){
            allowComments = true;
        } else{
            allowComments = false;
        }

        const newPost = new Post({
            title: req.body.title,
            status: req.body.status,
            allowComments: allowComments,
            body: req.body.body,
            file: filename
        })

        newPost.save().then(savedPost => {

            req.flash('success_message', 'Post was created succesfully ' + savedPost.title);

            res.redirect('/admin/posts');
        })
        .catch(err => {

            res.render('admin/posts/create', {errors: err.errors})
            console.log(err, 'could not save post');
            
        })

    }

    
    
})

router.get('/edit/:id', (req, res) => {

    Post.findOne({_id: req.params.id}).then(post => {

        res.render('admin/posts/edit', {post});

    })
    .catch(err => console.log(err))
    

});

router.put('/edit/:id', (req, res) => {
    Post.findOne({_id: req.params.id}).then(post => {

        let allowComments = true;

        if(req.body.allowComments){
            allowComments = true;
        } else{
            allowComments = false;
        }

        post.title = req.body.title;
        post.status = req.body.status;
        post.allowComments = allowComments;
        post.body = req.body.body;

        if(!isEmpty(req.files)){
            let file = req.files.file;
            filename = Date.now() + '-' + file.name;
            post.file = filename;
            
            file.mv('./public/uploads/' + filename, (err) => {
                if(err) throw err;
            })
        }

        post.save().then(updatedPost => {

            req.flash('success_message', 'Post was succesfully updated');

            res.redirect('/admin/posts')
        })
        .catch(err => console.log(err))
        

    })
    .catch(err => console.log(err))
    
})

router.delete('/:id', (req, res) => {

    Post.findOne({_id: req.params.id}).then(post => {

        fs.unlink(uploadDir + post.file, (err) => {
            req.flash('success_message', 'POST WAS DELETED');
            post.remove();
            res.redirect('/admin/posts');
            
        })
    })
    .catch(err => console.log(err)
    )

})


module.exports = router;