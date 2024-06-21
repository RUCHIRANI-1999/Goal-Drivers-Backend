import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
  const connection = connection_function()
    try{
      connection.query("SELECT * FROM cart WHERE buyer_id = "+req.params.buyer_id,async function (err, result, fields) {
        if (err) res.send(err);
        connection.query("SELECT * FROM product", function (err, result2, fields) {
          if (err) res.send(err);
          let product_ids = []
          let response = []
          for(let i in result){
            let product = {
              product_id:result[i].product_id,
              cart_id:result[i].cart_id
            }
            product_ids.push(product)
           }
          console.log(result2[0])
          for(let i in result2){
            console.log(result2[i].product_id)
            let index = product_ids.findIndex(item => item.product_id === result2[i].product_id) 
            console.log(index)
            if(index!=-1){
              let resp = {
                cart_id:product_ids[index].cart_id,
                product:result2[i]
              }
              response.push(resp)
            }
          }
          console.log(response)
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