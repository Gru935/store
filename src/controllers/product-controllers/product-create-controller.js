export function productCreateController(req, res){
    const {name, value} = req.body;

    const product = productCreateRepository({
        id,
        name,
        value
    });
    return res.status(201).json(product);
}