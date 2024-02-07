import { productEditRepository } from "../../database/database.js";

export function productEditController(req, res){
    const {name, value} = req.body;
    
    productEditRepository({
        name,
        value
    });
    
    return res.status(201).send({
        desc: 'produto editado'
    });
}