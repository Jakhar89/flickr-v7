var express = require('express');
var router = express.Router();

//Render Index
router.get('/', function(req, res, next){
    //res.send('Hello');
    res.render('../client/dist/index.html');
});


module.exports = router;