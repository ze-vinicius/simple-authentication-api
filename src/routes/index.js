const express = require('express');
const createUserService = require('../services/createUserService');

const routes = express.Router();

routes.post('/users', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const user = await createUserService.execute({ name, email, password });

    return response.json(user);
  } catch (error) {
    console.log(error);
    return response.status(400).json({ error: error.message });
  }
});

module.exports = routes;
