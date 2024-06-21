import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        connection.query("SELECT * FROM user", function (err, result, fields) {
            if (err) res.send(err);
            for(let i=0; i<result.length; i++){
                delete result[i].password
            }
            res.send(result)   
          });
        
    }
    catch{
    console.log("catch")
    res.send("not valid")
    return
}
}