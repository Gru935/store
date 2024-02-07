import { userModel } from "../models/user-model.js";


export async function userFindByIdRepository(id){
    const user = await userModel.findById(id);

    return user;
}