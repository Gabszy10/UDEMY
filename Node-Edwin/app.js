const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User')
const bcrypt = require('bcryptjs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://127.0.0.1/login', {useNewUrlParser: true} , () => {
    console.log('CONNECTED TO DB');
});

app.post('/register', (req, res) => {

    const newUser = new User();

    newUser.email = req.body.email;
    newUser.password = req.body.password;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err){
                throw err;
            }

            newUser.password = hash;

            newUser.save().then(userSaved => {
                res.send(userSaved);
            })
            .catch(err => res.send('error registering'))
        })
    })
    
    
})

app.post('/login', (req, res) => {

    User.findOne({email: req.body.email}).then(user => {
        if(user){
            bcrypt.compare(req.body.password, user.password, (err, match) => {

                if(err){
                    throw err;
                }

                if(match){
                    res.send('USER WAS ABLE TO LOGIN');
                }
                else{
                    res.send('NOT ABLE TO LOGIN');
                }

            })
        }
    })

})

app.listen(5000, () => {
    console.log('Listening to port 5000');
})