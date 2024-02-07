export function verifyRoleMiddleware(req, res, next){
    if(req.user.role !== "Admin"){
        return res.status(401).send({
            desc: "o usuario autenticado nao e um Admin"
        })
    }
    
    next();
}