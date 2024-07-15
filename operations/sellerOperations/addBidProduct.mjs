import multer from 'multer';
import { connection_function } from '../../service/connection.mjs'

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('image');

export async function operation(req, res) {

    upload(req, res, function (err) {
        if (err) {
            return res.status(500).json({ error: 'Error uploading file' });
        }

        const connection = connection_function();

        function format(date) {
            if (!(date instanceof Date)) {
                throw new Error('Invalid "date" argument. You must pass a date instance');
            }
            var today = new Date();
            var time = today.getHours() + req.body.duration + ":" + today.getMinutes() + ":" + today.getSeconds();
            return `${time}`;
        }

        try {
            const { name, description, seller_id, amount, base_price } = req.body;
            const image = req.file.buffer;

            var sql = "INSERT INTO product (admin_status, type, name, description, seller_id, amount, price, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            connection.query(sql, ['pending', 'bid', name, description, seller_id, amount, base_price, image], function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    var current_time = format(new Date());
                    var sql = "INSERT INTO bid_product (product_id, status, base_price, end_time) VALUES (?, ?, ?, ?)";
                    connection.query(sql, [result.insertId, 'ongoing', base_price, current_time], function (err, result2) {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send("success");
                        }
                    });
                }
            });
        } catch (err) {
            console.log("catch", err);
            res.send("not valid");
            return;
        }
    });
}