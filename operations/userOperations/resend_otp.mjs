import {connection_function} from '../../service/connection.mjs'
import {issue_token} from '../../authentication/index.mjs'
import { sendMail_noAttach } from '../send_mails/index.mjs';

export function operation(req , res){
    const connection = connection_function()
    try{
    connection.query("select * from otp where email = '"+req.body.email+"'", function (err, result, fields) {
        if (err) res.send(err);
        else{
            if(result.length===0){
            let otp_ = Math.floor((Math.random() * 9999) + 1)
            let otp = otp_.toString()
            var sql = "UPDATE otp " + "SET otp = '"+otp+"' WHERE id = "+result[0].otp_id
            connection.query(sql, function (err, result2, fields) {
            if (err) res.send(err);
        else{
            sendMail_noAttach(req.body.email , "New OTP" ,otp)
            res.send("success")
        }
        });
            }
            else{
                res.send("already registered")
        }
        }  
      });
    }
    catch{
        res.send("error body")
    }
}