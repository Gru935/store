import { productDeleteRepository } from "../../database/database.js";

export function productDeleteController(req, res){
    const {id} = req.body;
    productDeleteRepository(id);
    return res.status(201).send({
        desc: 'produto deletado'
    })
}