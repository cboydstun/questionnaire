const { User } = require('../models/userModel');

// GET - /api/users - get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while getting users.' });
    }
};

// GET - /api/users/:id - get a single user
exports.getUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while getting the user.' });
    }
};

// POST - /api/users - create a new user
exports.createUser = async (req, res) => {
    try {
        const user = await User.create({
            user_name: req.body.user_name,
            score: req.body.score
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while creating the user.' });
    }
};

// PUT - /api/users/:id - update a user
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            user.update({
                user_name: req.body.user_name,
                score: req.body.score
            });
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while updating the user.' });
    }
};

// DELETE - /api/users/:id - delete a user
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            user.destroy();
            res.status(200).json({ message: 'User deleted.' });
        } else {
            res.status(404).json({ message: 'User not found.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while deleting the user.' });
    }
};

// PUT - /api/users/:id/points/:number - add points to a user
exports.addPoints = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            user.update({
                score: user.score + parseInt(req.params.number)
            });
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while adding points to the user.' });
    }
};
