var pg = require('pg');

var connectionString = "postgres://postgres:pocketchef@localhost/pocketchef";
var pgClient = new pg.Client(connectionString);
pgClient.connect();
var data = pgClient.query("SELECT name, rating FROM api.restaurants WHERE cuisine='American'", (err, res) => {
    if (err) throw err;
    data = JSON.stringify(res);
    pgClient.end();
    return data;
});
console.log(data)
