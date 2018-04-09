var request = require('../frontend/node_modules/request');
var filters = [{"name": "name", "op": "like", "val": "%halal%"}];

var options = {
  url: ('http://pocketchef.me/api/restaurants2'),
  headers: { 'Content-type': 'application/json'},
  method: 'GET',
  q: {'filters': filters}
  //data: {'q': {'filters': filters}}
};

function callback(error, response, body){
  if(!error && response.statusCode == 200){
    var info = JSON.parse(body);
    console.log(info['objects'][0]);
    console.log(filters);
  }else{
     console.log(error);
  }
}

request(options,callback);
