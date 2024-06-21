import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        connection.query("select * from request_meeting where seller_id= "+req.params.seller_id+" and seller_status = 'pending'", function (err, result, fields) {
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