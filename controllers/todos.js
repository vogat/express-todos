//Export the index fcn
module.exports = {
    index,
    show
};

const Todo = require('../models/todo');

function show(req, res) {
res.render('todos/show', {
    todo: Todo.getOne(req.params.id)
});
}

//Index fcn
function index (req, res) {
    res.render('todos/index', {
        todos: Todo.getAll()
    });
}