import {connection_function} from '../../service/connection.mjs'
import {pdfCreate} from '../systemOperations/index.mjs'
import {sendMail} from '../send_mails/index.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        connection.query("SELECT * FROM sale WHERE product_id="+req.params.product_id, function (err, result, fields) {
            if (err) res.send(err);
            else{
                connection.query("SELECT * FROM product WHERE product_id="+req.params.product_id,async function (err, result2, fields) {
                    if (err) res.send(err);
                    else{
                        let data = {
                            id : req.params.product_id,
                            name: result[0].name,
                            income:1000.00,
                            price:result[0].price,
                            amount:result2[0].amount,
                            sold:0
                        }
                        for(let i in result){
                            data.sold+=result[i].amount
                        }
                        data.income = data.sold * data.price
                        await pdfCreate(data)
                        await sendMail(req.params.email , "Good" ,"Take This")
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