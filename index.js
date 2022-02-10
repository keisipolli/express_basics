const express = require('express')
const app = express();
const path = require('path')


app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs');

app.get('/questions', (req, res)=> {
    let questions = [
        {title: "What is node.js?", user: "Kadi", votes: "10"},
        {title: "What is express.js?", user: "Mike", votes: "8"}
    ]
    res.render('index', {questions : questions});

// listen app via port
app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000');
});