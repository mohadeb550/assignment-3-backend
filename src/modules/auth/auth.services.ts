import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import jwt from 'jsonwebtoken'
import config from "../../config";


const createUserIntoDB = async (payload : TUser) => {
    const result = await User.create(payload);
    return result;
}

const loginUser = async (payload: TLoginUser) => {
    const user = await User.findOne({ email : payload.email });

    // check user existence 
    if(!user){
        throw new AppError(httpStatus.UNAUTHORIZED, 'user not exist')
    }
    // check password 
    if(user.password !== payload.password){
        throw new AppError(httpStatus.UNAUTHORIZED, 'Password incorrect')
    }
    // create a token for user 
    const jwtPayload = { email : user.email, role : user.role }
    const token = jwt.sign(jwtPayload, config.jwt_access_secret as string, { expiresIn : config.jwt_access_expires});
    
    console.log({ ...user, token})
    return { ...user, token}
}

export const authServices = {
    createUserIntoDB,
    loginUser
}