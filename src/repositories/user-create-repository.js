import { userModel } from "../models/user-model.js";


export async function userCreateRepository(data){
    const  user = await userModel.create({
        name: data.name,
        email: data.email,
        role: data.role,
        password: data.password
    })

    return user;
}