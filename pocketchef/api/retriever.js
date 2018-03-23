var pg = require('pg');

var connectionString = "postgres://postgres:pocketchef@localhost/pocketchef";
var client = new pg.Client(connectionString);
client.connect();
var data = client.query("SELECT * FROM api.restaurants LIMIT 10'", (err, res) => {
    if (err) throw err;
    console.log(JSON.stringify(res));
    pgClient.end();
});
