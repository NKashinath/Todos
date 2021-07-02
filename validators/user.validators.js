
module.exports = {
    getErrors: (err) => {
        errorsArray = []
        if (err && err.hasOwnProperty('errors')){
            if(err.errors['name']){
                errorsArray.push(err.errors['name'].message);
            }
            if(err.errors['password']){
                errorsArray.push(err.errors['password'].message);
            }
            if(err.errors['email']){
                errorsArray.push(err.errors['email'].message);
            }
            return errorsArray;
            } else {
                return errorsArray;
            }
    }
}