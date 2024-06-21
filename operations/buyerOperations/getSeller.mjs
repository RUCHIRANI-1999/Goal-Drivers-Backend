import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        connection.query("select * from user where user_id= "+req.params.seller_id, function (err, result, fields) {
            if (err) res.send(err);
            else{
                res.send(result)
        }  
      });
    }
    catch(e){
        res.send(e)
        return
    }
}