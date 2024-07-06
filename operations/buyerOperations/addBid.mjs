import { connection_function } from '../../service/connection.mjs';

export async function operation(req, res) {
    const connection = connection_function();

    try {
        connection.query("SELECT base_price FROM bid_product WHERE product_id = ?", [req.body.product_id], function (err, result) {
            if (err) {
                res.send(err);
            } else {
                console.log(result[0]);
                if (result[0].base_price <= req.body.bid) {
                    const sql = "INSERT INTO buyer_bid (buyer_id, product_id, bid) VALUES (?, ?, ?)";
                    connection.query(sql, [req.body.buyer_id, req.body.product_id, req.body.bid], function (err, result2) {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send('success');
                        }
                    });
                } else {
                    res.send('bid is too low');
                }
            }
        });
    } catch (error) {
        console.log("catch", error);
        res.send("not valid");
    }
}
