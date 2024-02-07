import { users } from "../../database/database.js"

export function validateUserEditMiddleware(req, res, next){
    const {name, email, role, password, oriEmail} = req.body;

    if(!oriEmail){
        return res.status(400).send({
            field: 'oriEmail',
            desc: 'necessario informar o email para editar o usuario'
        })
    }

    if(oriEmail){
        if(users.filter(user => user.email === oriEmail).length <= 0){
            return res.send(404).send({
                field: 'oriEmail',
                desc: 'usuario nao encontrado'
            })
        }
    }

    if(name){
        if(typeof name !== "string" || name.length < 2 || name.includes(' ')){
            return res.status(400).send({
                field: 'name',
                desc: 'name deve ser uma string sem espacos com, pelo menos, 2 caracteres'
            })
        }
    }

    if(email){
        if(users.filter(user => user.email === email).length > 0){
            return res.status(400).send({
                field: 'email',
                desc: 'ja existe uma conta com esse email'
            })
        }
        if(!email.includes('@') || email.includes(' ')){
            return res.status(400).send({
                field: 'email',
                desc: 'email deve ter @ e nao incluir espacos'
            })
        }
    }

    if(role){
        if(role !== 'Admin' && role !== 'Operator'){
            return res.status(400).send({
                field: 'role',
                desc: 'role deve ser Admin ou Operator'
            })
        }
    }

    if(password){
        if(typeof password !== "string" || password.length < 8 || password.includes(' ')){
            return res.status(400).send({
                field: 'password',
                desc: 'password deve ser uma string sem espacos com, pelo menos, 8 caracteres'
            })
        }
    }

    next();
}