const jwt = require('jsonwebtoken')

const middleware = {
    jwtAuthorization: async (req, res, next) =>{
        try{
           const verifyToken = await jwt.verify(req.headers.authorization, 'D0nt4get!');
        // const verifyToken = false
           if(verifyToken){
               next();
           } else {
            res.status(409);
            res.json({data: 'Unauthorized_User', errorDescription: 'Invalid_Token'})
           }
        }
        catch (error){
            console.log(error);
            res.status(409);
            res.json({data: 'UnAuthorized_User', errorDescription: 'Token_Expired'})
        }
    }
}
module.exports = middleware;