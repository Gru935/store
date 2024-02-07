export function validateProductEditMiddleware(req, res, next){
    const {name, value} = req.body;

    if(name){
        if(typeof name !== "string" || name.length < 2 || name.includes(' ')){
            return res.status(400).send({
                field: 'name',
                desc: 'name deve ser uma string sem espacos com, pelo menos, 2 caracteres'
            })
        }
    }

    if(value){
        if(typeof value !== "number" || value < 0){
            return res.status(400).send({
                field: 'value',
                desc: 'value deve ser um number maior ou igual a 0'
            })
        }
    }

    next();
}