import { connection_function } from '../../service/connection.mjs';

export async function operation(req, res) {
    const connection = connection_function();
    try {
        connection.query("SELECT * FROM product WHERE NOT admin_status = 'rejected'", function (err, result, fields) {
            if (err) return res.send(err);
            
            connection.query("SELECT * FROM bid_product", function (err, result2, fields) {
                if (err) return res.send(err);

                let product_ids = [];
                let response = [];

                for (let i in result) {
                    if (result[i].type === "bid") {
                        product_ids.push(result[i].product_id);
                    } else {
                        response.push({ product: result[i] });
                    }
                }

                for (let i in result2) {
                    if (product_ids.includes(result2[i].product_id)) {
                        const index = result.findIndex(object => object.product_id === result2[i].product_id);
                        response.push({
                            product: result[index],
                            status: result2[i].status,
                            base_price: result2[i].base_price,
                            end_time: result2[i].end_time
                        });
                    }
                }

                res.send(response);
            });
        });
    } catch (error) {
        console.log("catch");
        res.send("not valid");
    }
}
