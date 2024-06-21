import {connection_function} from '../../service/connection.mjs'
import {issue_token} from '../../authentication/index.mjs'

export function operation(req , res){
    const connection = connection_function()
    try{
        connection.query("select * from otp where email = '"+req.body.email+"'", function (err, result, fields) {
            if (err) res.send(err);
            else{
                if(result.length===0){
                    res.send("error email")
                }
                else{
                if(req.body.otp===result[0].otp){
                    var sql = "DELETE FROM otp WHERE otp_id = "+result[0].otp_id
                    connection.query(sql, function (err, result, fields) {
                    if (err)
                        res.send(err)
                    else{
                        res.send("success")
                    }
            })
                }
                else{
                    res.send("error otp")
                }
            }
    }
})
    }
    catch{
        res.send("error username or password")
    }
}