const Todo = require("../Models/todo_models");

// CREATE TODO
const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({
                message: "Title and Description are required!"
            });
        }

        const newTodo = await Todo.create({
            title,
            description
        });

        res.status(201).json({
            message: "Todo created successfully",
            todo: newTodo
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// GET ALL TODOS
const get_Todo = async (req, res) => {
    try {
        const todos = await Todo.find();

        res.status(200).json(todos);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// GET TODO BY ID
const get_Todo_By_ID = async (req, res) => {
    try {
        const todo = await Todo.findById(
            req.params.id
        );

        if (!todo) {
            return res.status(404).json({
                message: "Todo Not Found"
            });
        }

        res.status(200).json(todo);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// UPDATE TODO
const Update_Todo = async (req, res) => {
    try {

        const todo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!todo) {
            return res.status(404).json({
                message: "Todo Not Found"
            });
        }

        res.status(200).json({
            message: "Todo Updated Successfully",
            todo
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// DELETE TODO
const deleted_Todo = async (req, res) => {
    try {

        const deletedTodo = await Todo.findByIdAndDelete(
            req.params.id
        );

        if (!deletedTodo) {
            return res.status(404).json({
                message: "Todo Not Found"
            });
        }

        res.status(200).json({
            message: "Todo Deleted Successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createTodo,
    get_Todo,
    get_Todo_By_ID,
    Update_Todo,
    deleted_Todo
};