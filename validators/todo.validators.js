
module.exports = {
    getErrors: (err) => {
        errorsArray = []
        if (err && err.hasOwnProperty('errors')){
            if(err.errors['notes']){
                errorsArray.push(err.errors['notes'].message);
            }
            return errorsArray;
            } else {
                return errorsArray;
            }
    }
}