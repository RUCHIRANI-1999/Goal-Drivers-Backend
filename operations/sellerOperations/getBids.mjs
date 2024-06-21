import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        connection.query("SELECT * FROM buyer_bid WHERE product_id="+req.params.product_id, function (err, result, fields) {
            if (err) res.send(err);
            else{
                connection.query("SELECT * FROM user", function (err, result2, fields) {
                    if (err) res.send(err);
                    let buyer_ids = []
                    let response = []
                    for(let i in result){
                        buyer_ids.push(result[i].buyer_id)
                      
                     }
                       for(let i in result2){
                        console.log(result[i])

                        if(buyer_ids.includes(result2[i].user_id)){
    
                            const index = result.findIndex(object => {
                                console.log(object)
                                return object.buyer_id === result2[i].user_id;
                              });
                              console.log(index)
                            let res = {
                                bid:result[index],
                                user: result2[i]
                            }
                            response.push(res)
                        }
                       }
                       res.send(response)
                  });
            }
          });   
    }
    catch{
    console.log("catch")
    res.send("not valid")
    return
}
}