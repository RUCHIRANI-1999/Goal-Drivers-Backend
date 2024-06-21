import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

export function issue_token(userId , userType , email , password){
    dotenv.config()
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: userId,
        userType: userType,
        email:email,
        password:password
    }
    console.log(data)
    const token = jwt.sign(data, jwtSecretKey);
      return token
}