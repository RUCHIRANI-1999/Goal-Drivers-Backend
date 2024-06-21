import  express  from 'express'
import {deliveryAdd , deliveryGet , deliveryGetById, generateHash} from '../../operations/payment/index.mjs'

const router = express.Router()

router.get('/' ,(req,res,next)=>{
    res.send('buyer home')
})

router.post('/add_delivery' ,(req,res,next)=>{
    deliveryAdd(req,res)
})

router.post('/get_hash' ,(req,res,next)=>{
    generateHash(req,res)
})

router.get('/get_delivery' ,(req,res,next)=>{
    deliveryGet(req,res)
})

router.get('/get_delivery_id/:delivery_id' ,(req,res,next)=>{
    deliveryGetById(req,res)
})

export default router