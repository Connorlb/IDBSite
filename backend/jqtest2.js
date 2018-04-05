require('../pocketchef/node_modules/jsdom/lib/old-api').env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }

    var $ = require('../pocketchef/node_modules/jquery')(window);

    var name_filter = [{"name": "name", "op": "like", "val": "%halal%"}];
    var cuisine_filter = [{"name": "cuisine", "op": "equals", "val": "American"}];

    console.log('pre query');

    $.ajax({
      url: 'pocketchef.me/api/restaurants2',
      type: "GET",
      data: {"q": JSON.stringify({"filters": name_filter})},
      dataType: "json",
      contentType: "application/json",
      success: function(data) { console.log(data); }
    });

    console.log('post query')
});
