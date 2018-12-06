var express = require('express');
var router = express.Router();



// Get All Feed
router.get('/tasks', function(req, res, next){
    var request = require('request');
    request('https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1', function (error, response, body) {
        //console.log(response)
        if (!error && response.statusCode == 200) {
        res.send(body);
        }
    })
});

// Get Feed based upon key
router.get('/tasks/:key', function(req, res, next){
    var request = require('request');
    var key = req.params.key;
    request(`https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${key}&nojsoncallback=1`, function (error, response, body) {
        //console.log(response)
        if (!error && response.statusCode == 200) {
        res.send(body);
        }
    })
});


module.exports = router;