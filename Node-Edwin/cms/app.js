const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const upload = require('express-fileupload');
const session = require('express-session');
const flash = require('connect-flash');

mongoose.connect('mongodb://localhost:27017/cms', {useNewUrlParser: true}).then((db) => {
    console.log('MONGO DB CONNECTED');
    
}).catch(err => console.log(err));

app.use(express.static(path.join(__dirname, 'public')));

const {select, generateTime} = require('./helpers/handlebars-helpers')

app.set('view engine', 'handlebars');

app.use(upload())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({defaultLayout: 'admin', helpers: {select, generateTime}}))

const home = require('./routes/home/index');
const admin = require('./routes/admin/index');
const posts = require('./routes/admin/posts.js');
const categories = require('./routes/admin/categories.js');

app.use(session({

    secret: 'gabszy',
    resave: true,
    saveUninitialized: true

}));

app.use(flash());

//Local varialbles using middleware
app.use((req, res, next) => {
    res.locals.success_message = req.flash('success_message');

    next();
});

app.use('/', home);
app.use('/admin/posts', posts);
app.use('/admin', admin);
app.use('/admin/categories', categories);


app.listen(5000, () => {
    console.log(`Listening to port 5000`);
    
})