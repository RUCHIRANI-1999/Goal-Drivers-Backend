import  express  from 'express'
import {confirmProduct , searchReview , hideReviews, searchUsers , getUsers , rejectProduct , getPendingProducts , getReviews , addHelp} from '../../operations/adminOperations/index.mjs'

const router = express.Router()

router.get('/' ,(req,res,next)=>{
    res.send('admin home')
})

router.put('/confirm_product/:product_id' ,(req,res,next)=>{
    confirmProduct(req,res)
})

router.put('/reject_product/:product_id' ,(req,res,next)=>{
    rejectProduct(req,res)
})

router.put('/hide_review/:review_id' ,(req,res,next)=>{
    hideReviews(req,res)
})

router.get('/get_products/pending' ,(req,res,next)=>{
    getPendingProducts(req,res)
})

router.get('/get_reviews' ,(req,res,next)=>{
    getReviews(req,res)
})

router.get('/get_users' ,(req,res,next)=>{
    getUsers(req,res)
})

router.get('/search_users/:key' ,(req,res,next)=>{
    searchUsers(req,res)
})

router.get('/search_review/:key' ,(req,res,next)=>{
    searchReview(req,res)
})

router.post('/add_help' ,(req,res,next)=>{
    addHelp(req,res)
})

export default router