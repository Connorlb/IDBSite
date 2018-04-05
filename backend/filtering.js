var request = require('../pocketchef/node_modules/request');
var qs = require('querystring');
var filters = [{"name": "name", "op": "like", "val": "%halal%"}];

var cuisine = "American";
var cuisineF = [{"name": "cuisine", "op": "equals", "val": cuisine}];

var options = {
  url: 'http://pocketchef.me/api/restaurants2',
  q: {'filters': filters},
  headers: { 'Content-type': 'application/json'},
  method: 'GET'
};

function callback(error, response, body){
  if(!error && response.statusCode == 200){
    var info = JSON.parse(body);
    console.log(info['objects'][0]);
  }else{
     console.log(error);
  }
}

request(options,callback);

