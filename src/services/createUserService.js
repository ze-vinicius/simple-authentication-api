const usersController = require('../controllers/usersController');

async function execute({ name, email, password }) {
  const userExists = await usersController.findByEmail(email);

  if (userExists) {
    throw new Error('User email is already in use');
  }

  const user = await usersController.create({ name, email, password });

  return user;
}

module.exports = {
  execute,
};
