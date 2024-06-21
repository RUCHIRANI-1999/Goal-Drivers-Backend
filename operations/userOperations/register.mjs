import {connection_function} from '../../service/connection.mjs'
import {issue_token} from '../../authentication/index.mjs'
import { sendMail_noAttach } from '../send_mails/index.mjs';

export function operation(req , res){
    const connection = connection_function()
    try{
    connection.query("select * from user where email = '"+req.body.email+"'", function (err, result, fields) {
        if (err) res.send(err);
        else{
            if(result.length===0){
                var sql = "INSERT INTO user (firstname ,lastname , email , password , role) " + "VALUES ('"+req.body.firstname+"','"+req.body.lastname+"','"+req.body.email+"','"+req.body.password+"','"+req.body.role+"')"
                connection.query(sql, function (err, result, fields) {
                if (err) res.send(err);
        else{
            let otp_ = Math.floor((Math.random() * 9999) + 1)
            let otp = otp_.toString()
            var sql = "INSERT INTO otp (otp , email) " + "VALUES ('"+otp+"','"+req.body.email+"')"
            connection.query(sql, function (err, result, fields) {
            if (err) res.send(err);
        else{
            sendMail_noAttach(req.body.email , "New OTP" ,otp)
            res.send("success")
        }
        });
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