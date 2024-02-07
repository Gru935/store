export function productListController(req, res){
    const products = productListRepository();
    return res.status(200).json(products);
}