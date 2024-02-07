import { users}  from "../../database/database.js"
import { userModel } from "../../models/user-model.js";
import { userFindByIdRepository } from "../../repositories/user-find-by-id-repository.js";

export async function validateUserDeleteMiddleware(req, res, next){
    const {id} = req.params;

    const user = await userFindByIdRepository(id);
    if(!user){
        return res.status(404).send({
            desc: 'usuario nao encontrado'
        })
    }
    // if(users.filter(user => user.email === email).length <= 0){
    //     return res.status(404).send({
    //         desc: 'usuario nao encontrado'
    //     })
    // }
    
    next();
}