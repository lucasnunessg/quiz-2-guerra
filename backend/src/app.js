const express = require('express');

const userController = require('./controller/user.controller');

const app = express();

app.use(express.json());

app.get('/users/search/:id/:email', userController.getByIdAndEmail);

app.get('/users', userController.getAll);

app.get('users/:id', userController.getById);

app.use('/', (req, res) => {
  res.status(200).json({message: 'ta vivo'})
})


module.exports = app;