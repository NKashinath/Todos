const todoModel = require('../model/todo.model');
const todoService = require('../services/todo.service');
const validationError = require('../validators/todo.validators')

class todoCtrl{
    async getAll(req, res){
       try{
        let notes = await todoService.getAll();
        res.status(200);
        res.json({data: notes, status: true, err: null});
       } catch (err){
        res.status(401);
        res.json({data: null, status: false, err})
       }
    }
    async getById(req, res){
       try {
        const id = req.params.id;
        const notes = await todoService.getById(id);
        res.status(200);
        res.json({data: notes, status: true, err: null});
       }
       catch (err) {
        res.status(401);
        res.json({data: null, status: false, err});
        }
    }
   async addNotes(req, res){
        try{
            const count = await todoService.countNotes();
            req.body.nid = +count + 1;
            const notes = await todoService.add(req.body);
            res.status(200);
            res.json({data: notes, status: true, err: null});
        }
        catch(err){
            res.status(500);
            res.json({data: null, status: false, error: {type: 'Bad Request', error: validationError.getErrors(err)}});
        }
    }

    async updateNotes(req, res){
        const id = req.params.id;
        try{
            const notes = await todoService.update(id, req.body);
            res.status(200);
            res.json({data: notes, status: true, err: null})
        }
        catch(err){
            res.status(409);
            res.json({data: null, status: false, err});

        }
    }
    deleteNotes(req, res){
        const id = req.params.id;
        todoModel.findByIdAndRemove(id)
        .exec()
        .then((notes)=>{
            res.status(200);
            res.json({data: 'Deleted Successfully', status: true, err: null});
        })
        .catch((err)=>{
            res.status(500);
            res.json({data: null, status: false, err});
        })
    }
}
module.exports = new todoCtrl();