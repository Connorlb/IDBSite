var request = require('../pocketchef/node_modules/request');
var filters = [{"name": "name", "op": "like", "val": "%halal%"}];

var options = {
  url: 'http://pocketchef.me/api/restaurants2',
  headers: { 'Content-type': 'application/json'},
  method: 'GET'
};

function callback(error, response, body){
  if(!error && response.statusCode == 200){
    var info = JSON.parse(body);
    console.log(info['objects'][293]);
  }else{
     console.log(error);
  }
}

request(options,callback);
