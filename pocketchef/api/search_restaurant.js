var pg = require('pg');

var data = "";
var connectionString = "postgres://postgres:pocketchef@localhost/pocketchef";
var pgClient = new pg.Client(connectionString);
pgClient.connect();
pgClient.query("SELECT name, rating FROM api.restaurants WHERE cuisine='American'", (err, res) => {
    if (err) throw err;
    data = JSON.stringify(res);
    pgClient.end();
});
console.log(data);
