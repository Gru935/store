// import { userCreateRepository } from "../../repositories/user-create-repository.js";

import { userCreateRepository } from '../../repositories/user-create-repository.js';
import bcript from 'bcryptjs'

export async function userCreateController(req, res){
    const {password, name, email, role} = req.body;
    console.log('password', password)
    const salt = bcript.genSaltSync(10)
    const hash = bcript.hashSync(password, salt);

    // const user = userCreateRepository({
    //     name,
    //     email,
    //     role,
    //     password: hash
    // });
    const user = await userCreateRepository({
        name, email, role, password: hash
    })
    return res.status(201).json(user);
}