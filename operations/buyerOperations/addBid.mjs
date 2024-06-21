import {connection_function} from '../../service/connection.mjs'

export async function operation( req, res){
    const connection = connection_function()
    
        connection.query("SELECT base_price FROM bid_product WHERE prodcut_id= "+req.body.product_id, function (err, result, fields) {
            if (err) res.send(err);
            else{
                console.log(result[0])
                if(result[0].base_price<=req.body.bid){
        var sql = "INSERT INTO buyer_bid (buyer_id , product_id , bid) " + "VALUES ("+req.body.buyer_id+","+req.body.product_id+","+req.body.bid+")"
        connection.query(sql, function (err, result2, fields) {
        if (err) res.send(err);
        else{
            res.send('success')
        }
        });
    }
    else{
        res.send('bid is too low')
    }
    }
})
    }
