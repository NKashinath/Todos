const userService = require('../services/user.service');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validationError = require('../validators/user.validators');

class userCtrl{
async register(req, res){
    try{
        const isUserAvailable = await userService.getByEmail(req.body.email);
        if(isUserAvailable){
            res.status(200);
            res.json({data: 'User is already registered', status: true, err: null})    
        } else {
            req.body.password = await bcrypt.hash(req.body.password, 5)
            const user = await userService.create(req.body);
            res.status(200);
            res.json({data: user, status: true, err: null})
        }
    }
    catch (err){
        console.log(err);
        res.status(409);
        res.json({data: null, status: false, error: {type: 'Bad Request', error: validationError.getErrors(err)}});
    }
}
async getAllUsers(req, res){
    try{
        const user = await userService.getByEmail(req.body.uEmail);
        console.log(user);
        res.status(200);
        res.json({data: user, status: true, err: null})
    }
    catch (err){
        res.status(409);
        res.json({data: null, status: false, err})
    }
}
async login(req, res){
    try{
        const user = await userService.getByEmail(req.body.email);
        const isPasswordMatched = await bcrypt.compare(req.body.password, user.password);
        if(user){
            if(isPasswordMatched){
                const token = await jwt.sign({
                    userId: user._id,
                    email: user.email,
                    password: user.password,
                    mobile: user.mobile
                }, 'D0nt4get!', {expiresIn: '60min'})
                res.status(200);
                res.json({type: 'Valid_user', token: token, status: true, err: null})
            } 
            else {
                res.status(409);
                res.json({data: 'Password Incorrect', status: false, err: null});   
            }
        }
    }
        catch (err){
            res.status(409);
            res.json({data: 'Email or Password is Wrong', status: false, err: null});
        }
    }
}
module.exports = new userCtrl();