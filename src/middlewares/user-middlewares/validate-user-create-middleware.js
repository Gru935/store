import { users } from "../../database/database.js"

export function validateUserCreateMiddleware(req, res, next){
    const {name, email, role, password} = req.body;

    if(!(name && email && role && password)) return res.status(400).send({
        field: 'name, email, role, password',
        desc: 'parametros requeridos'
    });

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