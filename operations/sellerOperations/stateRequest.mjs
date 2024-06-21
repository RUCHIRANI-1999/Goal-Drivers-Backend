import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        var sql = "UPDATE request " + "SET seller_status = "+req.body.state+" WHERE request_id = "+req.params.request_id
        connection.query(sql, async function (err, result, fields) {
        if (err) res.send(err);
        else{
            connection.query("select email from request , user where user.user_id = request.buyer_id and request_id= "+req.params.request_id,async function (err, result2, fields) {
                if (err) res.send(err);
                else{
                    if(result2.length>0){
                        let subject = "Latest Update About Your Request Meeting "+req.params.request_id
                        let mail_body = 'Your reuest has stated by user as '+req.body.state
                        await sendMails(result2[0] ,subject , mail_body)
                        res.send("success")
                    }
                }  
              });
        }
    })
        
    }
    catch(e){
    console.log("catch")
    res.send(e)
    return
}
}