const express = require('express');

const userController = require('../src/controller/user.controller');

const app = express();

app.use(express.json());

app.get('/user', userController.getAll);

app.use('/', (req, res) => {
  res.status(200).json({message: 'ta vivo'})
})


module.exports = app;