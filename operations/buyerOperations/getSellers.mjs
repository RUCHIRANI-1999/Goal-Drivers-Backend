import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
  const connection = connection_function()
    try{
      connection.query("SELECT * FROM user WHERE role = 'seller'",async function (err, result, fields) {
        if (err) res.send(err);
        res.send(result)
      });       
}
catch{
  console.log("catch")
  res.send("not valid")
  return
}
}