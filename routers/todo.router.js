const express = require('express');
const router = express.Router();
const todoCtrl = require('../controllers/todo.ctrl');
const middleware = require('../middlewares/notes.middleware');

router.post('/addNotes', middleware.jwtAuthorization, todoCtrl.addNotes)
router.get('/', middleware.jwtAuthorization, todoCtrl.getAll);
router.get('/:id', middleware.jwtAuthorization, todoCtrl.getById);
router.put('/:id', middleware.jwtAuthorization, todoCtrl.updateNotes);
router.delete('/:id', middleware.jwtAuthorization, todoCtrl.deleteNotes);

module.exports = router;
