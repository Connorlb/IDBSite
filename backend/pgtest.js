var pg = require('pg');
var connectionString = "postgres://postgres:pocketchef@localhost/pocketchef";
var pgClient = new pg.Client(connectionString);
pgClient.connect();
var data = "";
//pgClient.query("SELECT name FROM api.restaurants WHERE cuisine='American'", (err, res) =>{

  //  if (err) throw err

  //  console.log(JSON.stringify(res,null,2))    

   //pgClient.end()

 //   data = res

//}

/*

var Cursor = require('pg-cursor')

pg.connect(function(err,client,done){

   var cursor = client.query(new Cursor("Select name from api.restaurants WHERE cuisine='American'"))

   cursor.read(5, function(err,rows){

         if(err){

             return done(err)

         }

      if(!rows.length) return done()

      console.log(rows)

   })

});*/

pgClient.query("SELECT name FROM api.restaurants WHERE cuisine=$1::text",['American'])
   .then(result => console.log(result))
   .catch(e => console.error(e.stack))
   .then(() => client.end())
console.log(data);


