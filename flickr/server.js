
var express = require('express');
var path = require('path');
var index = require('./routes/index');
var tasks = require('./routes/tasks');
var bodyParser = require('body-parser');

var port = process.env.PORT||3000;

var app = express();

//View Engine
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client/dist')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/app', tasks);

app.get('*', function(req, res) {
    res.sendfile('./client/dist/index.html')
  })

app.listen(port, function(){
    console.log('Server started on port '+port);
});