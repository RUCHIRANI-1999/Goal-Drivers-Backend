import  express  from 'express'
import {addReview , forget_password, login , register, resend_otp, verify_email} from '../../operations/userOperations/index.mjs'
const router = express.Router()

router.get('/' ,(req,res,next)=>{
    res.send('user home')
})

router.post('/user_login' ,(req,res,next)=>{
    login(req,res)
})

router.post('/add_review' ,(req,res,next)=>{
    addReview(req,res)
})

router.post('/register' ,(req,res,next)=>{
    register(req,res)
})

router.post('/forget_password' ,(req,res,next)=>{
    forget_password(req,res)
})

router.post('/verify_email' ,(req,res,next)=>{
    verify_email(req,res)
})

router.post('/resend_otp' ,(req,res,next)=>{
    resend_otp(req,res)
})

export default router