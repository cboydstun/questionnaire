const { sequelize } = require('../db/conn'); // Adjust the path as necessary
const { Question } = require('../models/quizModel');
const { User } = require('../models/userModel');

// Seed the database
const seedDatabase = async () => {
    try {
        // Clear and sync the database
        await sequelize.sync({ force: true });

        // Create a starter user
        const user = await User.create({
            user_name: 'some_test_user', score: 0
        });

        // Create a starter questionnaire
        await Question.bulkCreate([
            {
                question_name: 'What is the capital of France?',
                answer1: 'Paris',
                answer2: 'London',
                answer3: 'Berlin',
                answer4: 'Madrid',
                answer: 'A',
                difficulty: 'Easy',
                user_id: user.id // Associate questions with the created user
            },
            {
                question_name: 'What is the capital of Spain?',
                answer1: 'Paris',
                answer2: 'London',
                answer3: 'Berlin',
                answer4: 'Madrid',
                answer: 'D',
                difficulty: 'Easy',
                user_id: user.id
            },
            {
                question_name: 'What is the capital of Germany?',
                answer1: 'Paris',
                answer2: 'London',
                answer3: 'Berlin',
                answer4: 'Madrid',
                answer: 'C',
                difficulty: 'Easy',
                user_id: user.id
            },
            {
                question_name: 'What is the capital of England?',
                answer1: 'Paris',
                answer2: 'London',
                answer3: 'Berlin',
                answer4: 'Madrid',
                answer: 'B',
                difficulty: 'Easy',
                user_id: user.id
            }
        ]);

        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding the database:', error);
    }
};

seedDatabase();