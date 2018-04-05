var $ = require('jquery');
var filters = [{"name": "name", "op": "like", "val": "%halal%"}];
$.ajax({
  url: 'http://pocketchef.me/api/restaurants2',
  data: {"q": JSON.stringify({"filters": filters})},
  dataType: "json",
  contentType: "application/json",
  success: function(data) { console.log(data.objects); }
});
