const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// GET - /api/questions - get all questions
router.get('/', questionController.getAllQuestions);

// GET - /api/questions/:id - get a single question
router.get('/:id', questionController.getQuestionById);

// POST - /api/questions - create a new question
router.post('/', questionController.createQuestion);

// PUT - /api/questions/:id - update a question
router.put('/:id', questionController.updateQuestionById);

// DELETE - /api/questions/:id - delete a question
router.delete('/:id', questionController.deleteQuestionById);

exports.modules = router;