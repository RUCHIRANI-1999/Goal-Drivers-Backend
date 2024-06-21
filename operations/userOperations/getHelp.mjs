import {connection_function} from '../../service/connection.mjs'

export function operation(req , res){
    const connection = connection_function()
    try{
    connection.query("select * from help", function (err, result, fields) {
        if (err) res.send(err);
        else{
            return result
        }  
      });
    }
    catch{
        res.send("error username or password")
    }
}