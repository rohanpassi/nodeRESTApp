var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost:27017/bookAPI');
var Book = require('./models/bookModel');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var bookRouter = require('./Routes/bookRoutes')(Book);


app.use('/api/books', bookRouter);
//app.use('/api/authors', authorRouter);

app.get('/', function (req, res) {
    res.send('Welcome to My Api!');
});

app.listen(port, function () {
    console.log('Gulp is Running my API on PORT: ' + port);
});
