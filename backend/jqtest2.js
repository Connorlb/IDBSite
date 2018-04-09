require('../frontend/node_modules/jsdom/lib/old-api').env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }
    var $ = require('../frontend/node_modules/jquery')(window);

    var XMLHttpRequest = require("../frontend/node_modules/xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();

    var name_filter = [{"name": "name", "op": "like", "val": "%Halal%"}];
    var cuisine_filter = [{"name": "cuisine", "op": "equals", "val": "American"}];
    var ords = [{"field": "name", "direction": "asc"}];
    $.ajax({
      url: 'http://pocketchef.me/api/restaurants2',
      data: {"q": JSON.stringify({"filters": cuisine_filter, "order_by": ords})},
      dataType: "json",
      contentType: "application/json",
      headers: {"Access-Control-Allow-Origin": "*"},
      xhr: function () { return xhr; },
      success: function(data) { console.log(xhr.responseURL); },
      error: function(data) { console.log(data); }
    });
});
