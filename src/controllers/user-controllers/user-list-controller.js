// import { userListRepository } from "../../database/database.js";
import { userListRepository } from "../../repositories/user-list-repository.js";
export async function userListController(req, res){
    const users = await userListRepository();
    // console.log(users)
    // return res.status(200).send(users)
    return res.status(200).json(users?.map(user => ({
        id: user._id,
        name: user.name,
        role: user.role,
        email: user.email
    })));
}