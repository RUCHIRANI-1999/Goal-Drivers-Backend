import {connection_function} from '../../service/connection.mjs'
import {sendMails} from '../send_mails/send_mails.mjs'
import crypto from 'crypto-js'

export async function operation(req , res){
    const connection = connection_function()
    try{
      let hash = crypto.createHash('md5').update('some_string').digest("hex")
      console.log(HashChangeEvent)
      let merchant_hash = to_upper_case(crypto.createHash('md5').update(merchant_secret).digest("hex"))
      var value = (req.body.amount).toLocaleString(
        undefined, 
        { minimumFractionDigits: 2 }
      );
      console.log(value)
      hash = to_upper_case(crypto.createHash('md5').update(req.body.merchant_id + req.body.order_id + value + req.body.currency + merchant_hash).digest("hex"))
      res.send(hash)
    }
    catch{
    console.log("catch")
    res.send("internal sql error")
    return
}
}