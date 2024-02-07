// import { userDeleteRepository } from "../../repositories/user-delete-repository.js";

import { userDeleteRepository } from "../../repositories/user-delete-repository.js";

// import { userDeleteRepository } from "../../database/database.js";

export async function userDeleteController(req, res){
    const {id} = req.params;
    // console.log(req)
    // console.log('id', id)
    await userDeleteRepository(id);
    return res.status(201).send({
        desc: 'usuario deletado'
    })
}