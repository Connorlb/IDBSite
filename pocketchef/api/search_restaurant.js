var pg = require('pg');

var connectionString = "postgres://postgres:pocketchef@localhost/pocketchef";
var client = new pg.Client(connectionString);
client.connect();
// var data = pgClient.query("SELECT name, rating FROM api.restaurants WHERE cuisine='American'", (err, res) => {
//     if (err) throw err;
//     out = JSON.stringify(res);
//     pgClient.end();
//     return out;
// });
// console.log(data)
const query = {
    text: 'SELECT $1::text, $2::text FROM $3::text',
    values: ['name', 'rating', 'restaurants'],
    rowMode: 'array'
};

client.query(query, (err, res) => {
    if (err) {
        console.log(err.stack)
    }
    else {
        console.log(res.felds.map(f => field.name))
        console.log(res.rows[0])
    }
})
