import mysql from 'mysql';
import dotenv from 'dotenv'
dotenv.config()

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user:process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database : process.env.DB
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected")
  });

export function connection_function(){
  return connection
}