const express = require('express');
const createUserService = require('../services/createUserService');
const authenticateUserService = require('../services/authenticateUserService');

const routes = express.Router();

routes.post('/users', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const user = await createUserService.execute({ name, email, password });

    return response.json(user);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

routes.post('/sessions', async (request, response) => {
  try {
    const { email, password } = request.body;

    const { user, token } = await authenticateUserService.execute({
      email,
      password,
    });

    user.password = undefined;

    return response.json({ user, token });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});
module.exports = routes;
