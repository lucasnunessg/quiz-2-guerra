const express = require('express');

const userController = require('../src/controller/user.controller');

const app = express();

app.use(express.json());

app.get('/user', userController.getAll);

module.exports = app;