import { userEditRepository } from '../../database/database.js';
import bcript from 'bcryptjs'

export function userEditController(req, res){
    const {name, email, role, password, oriEmail} = req.body;
    
    const salt = bcript.genSaltSync(10)
    const hash = bcript.hashSync(password, salt);

    userEditRepository({
        name,
        email,
        role,
        password: hash
    }, oriEmail)
    
    return res.status(201).send({
        desc: 'usuario editado'
    });
}