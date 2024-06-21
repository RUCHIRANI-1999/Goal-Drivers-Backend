import {operation} from './adminStatusUpdate.mjs'

export async function operation_(req , res){
    try{
        operation(req , res , "confirmed")
    }
    catch{
    console.log("catch")
    res.send("not valid")
    return
}
}