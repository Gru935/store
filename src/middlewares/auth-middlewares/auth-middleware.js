import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next){
    const {authorization} = req.headers;
    // console.log('auth', authorization)
    if(!authorization){
        return res.status(401).json({message: "Unauthorized"});
    }
    
    const [,token] = authorization.split(' ')
    
    jwt.verify(token, "batata", (err, decoded) =>{
        if(err){
            return res.status(401).json({message: "Unauthorized"});
        }
        req.user = decoded;
        next();
    })
}