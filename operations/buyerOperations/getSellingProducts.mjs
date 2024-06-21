import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        connection.query("SELECT * FROM product WHERE type = 'selling'", function (err, result, fields) {
            if (err) res.send(err);
            else{
                let product_ids = []
                    let response = []
                    for(let i in result){
                        product_ids.push(result[i].product_id)
                     }
                connection.query("SELECT * FROM rating", function (err, result2, fields) {
                    if (err) res.send(err);
                    else{
                        for(let i in result2){
                            const index = result.findIndex(object => {
                                console.log(object)
                                return object.product_id === result2[i].product_id;
                              });
                              console.log(index)
                              result[index].rate = parseInt(result2[i].rating)
                        }
                        res.send(result)
                    }
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