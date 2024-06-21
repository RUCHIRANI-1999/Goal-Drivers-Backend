import  express  from 'express'
import {addBidProduct,getReport , getBidProducts , getBids , addSellingProduct , deleteProduct , getProducts , updateProduct , getRequests , stateRequest} from '../../operations/sellerOperations/index.mjs'
const router = express.Router()

router.get('/' ,(req,res,next)=>{
    res.send('seller home')
})

router.post('/add_bid_product' ,(req,res,next)=>{
    addBidProduct(req,res)
})

router.post('/add_selling_product' ,(req,res,next)=>{
    addSellingProduct(req,res)
})

router.get('/get_products/:seller_id' ,(req,res,next)=>{
    getProducts(req,res)
})

router.get('/get_bid_products/:seller_id' ,(req,res,next)=>{
    getBidProducts(req,res)
})

router.get('/get_bids/:product_id' ,(req,res,next)=>{
    getBids(req,res)
})

router.put('/update_product/:product_id' ,(req,res,next)=>{
    updateProduct(req,res)
})

router.delete('/remove_product/:prodcut_id' ,(req,res,next)=>{
    deleteProduct(req,res)
})

router.get('/requests/:seller_id' ,(req,res,next)=>{
   getRequests(req,res)
})

router.get('/get_report/:product_id/:email' ,(req,res,next)=>{
    getReport(req,res)
 })
 
router.put('/state_request/:request_id' ,(req,res,next)=>{
    stateRequest(req,res)
})

export default router