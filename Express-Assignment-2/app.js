const express = require('express');

const app = express();


app.use('/users', (req, res, next) => {
    console.log('user route "/users"')
    res.send('<h1>This is "/user"');
});

app.use('/', (req, res, next) => {
    console.log('this always runs');
    res.send('<h1>This is "/"</h1>');
}) 



app.listen(3000);