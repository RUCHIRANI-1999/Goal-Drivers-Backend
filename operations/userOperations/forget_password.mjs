import {connection_function} from '../../service/connection.mjs'
import {sendMail_noAttach} from '../send_mails/index.mjs'

export function operation(req , res){
    const connection = connection_function()
    try{
    connection.query("select * from user where email = '"+req.body.email+"'", function (err, result, fields) {
        if (err) res.send(err);
        else{
            if(result.length!=0){
                connection.query("select * from pending_password where email = '"+req.body.email+"'", function (err, result3, fields) {
                    if (err) res.send(err);
                    else{
                        var length = 12
                   let charset = "@#$&*0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&*0123456789abcdefghijklmnopqrstuvwxyz"
                let new_password = "";
                for (var i = 0, n = charset.length; i < length; ++i) {
                     new_password += charset.charAt(Math.floor(Math.random() * n));
                }
                if(result3.length===0){
                var sql = "INSERT INTO pending_password (email ,password) " + "VALUES ('"+req.body.email+"','"+new_password+"')"
                connection.query(sql, function (err, result2, fields) {
                if (err) res.send(err);
        else{
            sendMail_noAttach(req.body.email , "New Password" ,new_password)
            res.send("success")
        }
        });
                        }
                        else{
                            var sql = "UPDATE pending_password " + "SET password = '"+new_password+"' WHERE id = "+result3[0].id                
                            connection.query(sql, function (err, result2, fields) {
                if (err) res.send(err);
        else{
            sendMail_noAttach(req.body.email , "New Password" ,new_password)
            res.send("success")
        }
        });
                    }
                    }  
                  });
            }
            else{
                res.send("not registered")
        }
        }  
      });
    }
    catch{
        res.send("error body")
    }
}