// var pg = require('pg');
//
// var connectionString = "postgres://postgres:pocketchef@localhost/pocketchef";
// var client = new pg.Client(connectionString);
// client.connect();
// var data = pgClient.query("SELECT name, rating FROM api.restaurants WHERE cuisine='American'", (err, res) => {
//     if (err) throw err;
//     out = JSON.stringify(res);
//     pgClient.end();
//     return out;
// });
// console.log(data)
const { Pool } = require('pg');
const pool = new Pool()

const client = pool.connect()
const result = client.query({
    rowMode: 'array',
    text: 'SELECT name, address, rating FROM api.restaurants;'
})
console.log(result.rows)
client.end()
