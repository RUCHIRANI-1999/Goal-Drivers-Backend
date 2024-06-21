import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        connection.query("SELECT * FROM product WHERE NOT admin_status= 'rejected'", function (err, result, fields) {
            if (err) res.send(err);
            else{
                connection.query("SELECT * FROM bid_product", function (err, result2, fields) {
                  if (err) res.send(err);
                    let product_ids = []
                    let response = []
                    for(let i in result){
                      if(result[i].type ==="bid"){
                        product_ids.push(result[i].product_id)
                      }
                      else{
                        let res = {
                            product:result[i]
                        }
                        response.push(res)
                      }
                     }
                       for(let i in result2){
                        console.log(result[i])

                        if(product_ids.includes(result2[i].prodcut_id)){
    
                            const index = result.findIndex(object => {
                                console.log(object)
                                return object.product_id === result2[i].prodcut_id;
                              });
                              console.log(index)
                            let res = {
                                product:result[index],
                                status:result2[i].status,
                                base_price:result2[i].base_price,
                                end_time:result2[i].end_time
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