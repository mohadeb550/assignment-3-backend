import { TUser } from "./user.interface";
import { User } from "./user.model";


const getAllUsersFromDB = async () => {
    const result = await User.find({});
    return result;
}

const getSingleUserFromDB = async (email: string) => {
    const result = await User.findOne({ email});
    return result;
}

const updateUserIntoDB = async (id: string , payload: Partial<TUser>) => {
    const result = await User.findByIdAndUpdate(id, payload ,{new: true });
    return result;
}

const deleteUserFromDB = async ( id: string) => {
    const result = await User.findByIdAndDelete(id)
    return result;
}


export const userServices = {
    getAllUsersFromDB, getSingleUserFromDB ,updateUserIntoDB, deleteUserFromDB
}