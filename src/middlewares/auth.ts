import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/catchAsync"
import AppError from "../errors/AppError"
import httpStatus from "http-status"
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from "../config"
import { User } from "../modules/user/user.model"


const auth = (...requiredRoles: string[] ) => {
   return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization
        // check if the token is sent or not ?
        if(!token)throw new AppError(httpStatus.FORBIDDEN, "you are not authorized")

        // check if the token is valid
       const decoded =  jwt.verify(token.split(' ')[1], config.jwt_access_secret as string) as JwtPayload;
       const { email , role } = decoded;

    //    check if the user is exist?
        const user = await User.findOne({ email, role })

        if(!user)throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized')

        // check role 
        if(!requiredRoles.includes(role)){
            throw new AppError(httpStatus.UNAUTHORIZED, 'You have no access to this route');
        }
        req.user = decoded as JwtPayload;
        next()
    })
}

export default auth;