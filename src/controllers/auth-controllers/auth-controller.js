// import { userFindByEmail } from "../../database/database.js";
import { userFindByEmailRepository } from '../../repositories/user-find-by-email-repository.js';
import jwt from 'jsonwebtoken'
import bcript from 'bcryptjs'

function base64ToBytes(base64) {
    const binString = atob(base64);
    return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

export async function authController(req, res) {
    
    const { authorization } = req.headers;
    console.log('authorization', authorization)
    const [,base64] = authorization.split(' ');
    const userAndPass = new TextDecoder().decode(base64ToBytes(base64));
    console.log(userAndPass)
    const [email, pass] = userAndPass.split(':');

    const user = await userFindByEmailRepository(email)

    if(!user){
        return res.status(404).send({
            desc: 'email not found'
        })
    }

    // const isValid = user.password == pass;
    const isValid = bcript.compareSync(pass, user.password)

    if(!isValid){
        return res.status(401).send({
            desc: 'invalid password'
        })
    }


    const token = jwt.sign({
        email: user.email,
        role: user.role
    }, 'batata')


    return res.send({ token} )
}