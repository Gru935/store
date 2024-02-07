import { userModel } from "../models/user-model.js";


export async function userFindByEmailRepository(email){
    const user = await userModel.findOne({
        email
    });

    return user;
}