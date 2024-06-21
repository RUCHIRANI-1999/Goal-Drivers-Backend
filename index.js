import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import dotenv from 'dotenv'
import admin_router from './routes/adminRoute/Route.mjs'
import buyer_router from './routes/buyerRoute/Route.mjs'
import seller_router from './routes/sellerRoute/Route.mjs'
import user_router from './routes/userRoute/Route.mjs'
import payment_router from './routes/pament/Route.mjs'

var app = express();
dotenv.config();

app.use(cors())
app.use(bodyParser.json())

app.use('/api/admin',admin_router)
app.use('/api/seller',seller_router)
app.use('/api/buyer',buyer_router)
app.use('/api/user',user_router)
app.use('/api/payment',payment_router)

app.listen(process.env.PORT,()=>{
    console.log('server started in port : ',process.env.PORT)
})