import {connection_function} from '../../service/connection.mjs'
import {issue_token} from '../../authentication/index.mjs'

export function operation(req , res){
    const connection = connection_function()
    try{
        connection.query("select * from otp where email = '"+req.body.email+"'", function (err, result_, fields) {
            if (err) res.send(err);
        else{
            if(result_.length!=0){
                res.send("email is not verified")
            }
            else{
                connection.query("select * from user where email = '"+req.body.email+"'", function (err, result, fields) {
                    if (err) res.send(err);
                    else{
                        if(result.length===0){
                            res.send("error username or password")
                        }
                        else{
                        if(req.body.password===result[0].password){
                            const token = issue_token(result[0].user_id , result[0].role,result[0].email,result[0].password)
                            res.send({
                                token:token,
                                role:result[0].role,
                                user_id:result[0].user_id,
                                user_email:result[0].email,
                                password:result[0].password
                            })
                        }
                        else{
                            connection.query("select * from pending_password where email = '"+req.body.email+"'", function (err, result2, fields) {
                                if (err) res.send(err);
                                else{
                                    console.log(result2)
                                    if(result2.length===0){
                                        res.send("error username or password")
                                    }
                                    else{
                                        if(req.body.password===result2[0].password){
                                            console.log(req.body.password)
                                            var sql = "UPDATE user " + "SET password = '"+req.body.password+"' WHERE user_id = "+result[0].user_id
                                connection.query(sql, function (err, result3, fields) {
                                if (err) res.send(err);
                                else{
                                    const token = issue_token(result[0].user_id , result[0].role,result[0].email,result2[0].password)
                                    console.log(token)
                                            res.send({
                                                token:token,
                                                role:result[0].role,
                                                user_id:result[0].user_id,
                                                user_email:result[0].email,
                                                password:result2[0].password
                                            })
                                }
                            })
                                        }
                                        else{
                                            res.send("error username or password")
                                        }
                                    }
                                }
                                })
                            // res.send("error username or password")
                        } 
                    }
                    }  
                  });
            }
        }
        })
    }
    catch{
        res.send("error username or password")
    }
}