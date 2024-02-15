const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET - /api/users - get all users
router.get('/', userController.getAllUsers);

// GET - /api/users/:id - get a single user
router.get('/:id', userController.getUser);

// POST - /api/users - create a new user
router.post('/', userController.createUser);

// PUT - /api/users/:id - update a user
router.put('/:id', userController.updateUser);

// DELETE - /api/users/:id - delete a user
router.delete('/:id', userController.deleteUser);

// PUT - /api/users/:id/points/:number  - add points to a user
router.put('/:id/points/:number', userController.addPoints);

exports.modules = router;