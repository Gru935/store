import { userModel } from "../models/user-model.js";


export async function userDeleteRepository(id){
    console.log('id', id)
    const user = await userModel.findByIdAndDelete(id)
    console.log('deleted', user)
}