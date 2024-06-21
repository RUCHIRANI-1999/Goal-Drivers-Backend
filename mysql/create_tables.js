import {connection_function} from '../service/connection.mjs'
var connection = connection_function()

connection.query("CREATE TABLE product (product_id INT AUTO_INCREMENT PRIMARY KEY, admin_status VARCHAR(255), type VARCHAR(255),name VARCHAR(255), discription VARCHAR(255), seller_id INT , amount INT , price DOUBLE)", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

connection.query("CREATE TABLE bid_product (prodcut_id INT PRIMARY KEY,  status VARCHAR(255), base_price INT , end_time TIME , winner_id INT)", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

connection.query("CREATE TABLE buyer_bid (id INT AUTO_INCREMENT PRIMARY KEY ,bid INT , buyer_id INT,product_id INT)", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

connection.query("CREATE TABLE review (review_id INT AUTO_INCREMENT PRIMARY KEY ,comment VARCHAR(255) , user_id INT, product_id INT , status BOOLEAN)", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

connection.query("CREATE TABLE user (user_id INT AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(255), lastname VARCHAR(255),password VARCHAR(255) , email VARCHAR(255),role VARCHAR(255) )", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  connection.query("CREATE TABLE cart (cart_id INT AUTO_INCREMENT PRIMARY KEY,buyer_id INT , product_id INT )", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  
  connection.query("CREATE TABLE help (id INT AUTO_INCREMENT PRIMARY KEY,question VARCHAR(255) , answer VARCHAR(255) )", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  connection.query("CREATE TABLE request_meeting (request_id INT AUTO_INCREMENT PRIMARY KEY,buyer_id INT , seller_id INT , seller_status VARCHAR(255) , full_name VARCHAR(255) , contact VARCHAR(255), email VARCHAR(255), request VARCHAR(255))", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  connection.query("CREATE TABLE request_demo (request_id INT AUTO_INCREMENT PRIMARY KEY,buyer_id INT , full_name VARCHAR(255) , contact VARCHAR(255), email VARCHAR(255), request VARCHAR(255), businessLocation VARCHAR(255))", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  connection.query("CREATE TABLE delivery (delivery_id INT AUTO_INCREMENT PRIMARY KEY,firstname VARCHAR(255) , lastname VARCHAR(255) , district VARCHAR(255) , address VARCHAR(255) , contact VARCHAR(255),province VARCHAR(255),landmarks VARCHAR(255))", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  connection.query("CREATE TABLE sale (sale_id INT AUTO_INCREMENT PRIMARY KEY,amount INT ,name VARCHAR(255), product_id INT , buyer_id INT , price DOUBLE)", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  connection.query("CREATE TABLE pending_password (id INT AUTO_INCREMENT PRIMARY KEY ,email VARCHAR(255), password VARCHAR(255))", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  connection.query("CREATE TABLE rating (rating_id INT AUTO_INCREMENT PRIMARY KEY ,product_id INT, rating DOUBLE , amount INT)", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  connection.query("CREATE TABLE feedback (feedback_id INT AUTO_INCREMENT PRIMARY KEY ,product_id INT, comment VARCHAR(255) , user_id INT)", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  connection.query("CREATE TABLE otp (otp_id INT AUTO_INCREMENT PRIMARY KEY , otp VARCHAR(255) , email VARCHAR(255))", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });