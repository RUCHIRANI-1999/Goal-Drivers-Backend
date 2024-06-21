import {connection_function} from '../../service/connection.mjs'
import {sendMail_noAttach} from '../send_mails/index.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        let subject = req.body.subject
        let mail_body = "FullName : "+req.body.firstname+" "+req.body.lastname+"Email : "+req.body.email
        await sendMail_noAttach("goaldrivers21@gmail.com" ,subject , mail_body)
        res.send("success")
    }
    catch{
    console.log("catch")
    res.send("internal sql error")
    return
}
}