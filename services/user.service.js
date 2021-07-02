const userModel = require('../model/user.model');

class userService{
create(data){
    const addUser = new userModel(data);
    return addUser.save()
}
getAll(){
    return userModel.find().exec();
}
getByEmail(email){
    return userModel.findOne({email}).exec(); 
}
updatePassword(id, password){
    return userModel.findByIdAndUpdate(id, {$set: {password}}).exec();
}
}
module.exports = new userService()