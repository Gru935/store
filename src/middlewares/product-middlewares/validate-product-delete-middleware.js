import { products } from "../../database/database.js";

export function validateProductDeleteMiddleware(req, res, next){
    const {id} = req.body;
    if(products.filter(product => product.id === id).length <= 0){
        return res.status(404).send({
            desc: 'produto nao encontrado'
        })
    }
    
    next();
}