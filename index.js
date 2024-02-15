const express = require('express');
const { testConnection } = require('./db/conn');
const { authenticateJWT } = require('./middlewares/authMiddleware');
const cors = require('cors');

const app = express();
const PORT = 8080;

testConnection();
app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => {
    res.send('OK');
});

app.get('/protected', authenticateJWT, (req, res) => {
    res.send('This is a protected route');
});

// import routes
const userRoutes = require('./routes/userRoutes');
const questionRoutes = require('./routes/questionRoutes');

// use routes
app.use('/api/users', userRoutes.modules);
app.use('/api/questions', questionRoutes.modules);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});