import { userModel } from "../models/user-model.js";

export async function userListRepository(){
    const users = await userModel.find({});
    console.log('users', users)
    return users;
    // return []
}