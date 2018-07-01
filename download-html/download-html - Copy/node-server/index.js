
var express    = require('express');       
var app        = express();                
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;      
var router = express.Router();            

router.get('/client', function(req, res) {

    res.setHeader('Access-Control-Allow-Origin',  '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    
    var address = {
        houseNumber: 10,
        street: 'Long street',
        city: 'Oslo',
        state: 'Oslo',
        country: 'NO'
      };
    var client = {
        name: 'Jack',
        age: 30,
        address: address
      };
    res.json(client);   
});

app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);