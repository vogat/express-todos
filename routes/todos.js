var express = require('express');
var router = express.Router();

// All actual paths start with '/todos'

// Require the controller that exports To-Do CRUD functions
var todosCtrl = require('../controllers/todos');

router.get('/', todosCtrl.index);

// Get /todos/:id
router.get('/:id', todosCtrl.show);

module.exports = router;
