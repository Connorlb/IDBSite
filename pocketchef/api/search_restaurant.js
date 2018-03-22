var pg = require('pg');

var connectionString = "postgres://postgres:pocketchef@localhost/pocketchef";
var pgClient = new pg.Client(connectionString);
pgClient.connect();
pgClient.query("SELECT name, rating FROM api.restaurants WHERE cuisine='American'", (err, res) => {
    if (err) throw err
    // console.log(JSON.stringify(res, null, 2))
    console.log(typeof res)
    pgClient.end()
})
