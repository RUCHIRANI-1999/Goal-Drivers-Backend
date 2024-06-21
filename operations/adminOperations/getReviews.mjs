import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        connection.query("SELECT * FROM review WHERE status = TRUE", function (err, result, fields) {
            if (err) res.send(err);
            connection.query("SELECT * FROM user WHERE role = 'user'", function (err, result2, fields) {
                if (err) res.send(err);
                let response = []
                for(let i in result){
                    const index = result2.findIndex(object => {
                        console.log(object)
                        return object.user_id === result[i].user_id;
                      });
                      delete result2[index].password
                      let res = {
                        review : result[i],
                        user:result2[index]
                      }
                      response.push(res)
                }
                res.send(response)   
              });
          });
        
    }
    catch{
    console.log("catch")
    res.send("not valid")
    return
}
}