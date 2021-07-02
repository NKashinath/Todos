const todoModel = require('../model/todo.model');

class todoService{
getAll(){
    return todoModel.find().exec();
}
getById(id){
    return todoModel.findById(id).exec();
}
add(data){
    const notes = new todoModel(data);
    return notes.save();
}
update(id, data){
    return todoModel.findByIdAndUpdate(id, {
        $set: {
            notes: data.notes
        }
    }, {new: true}).exec();
}
// delete(id){
//     return todoModel.deleteOne(id).exec();
// }
countNotes(){
    return todoModel.count().exec();
}
}
module.exports = new todoService();