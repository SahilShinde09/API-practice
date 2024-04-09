const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Sample in-memory database
let students = [];

app.use(bodyParser.json());

// Route to get all students
app.get('/api/students', (req, res) => {
    res.status(200).get({
        tshirt: 'tshirt',
        size: 'large'
    })
});

// Route to create a new student
app.post('/api/students', (req, res) => {
    const student = req.body;
    students.push(student);
    res.status(201).json(student);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

