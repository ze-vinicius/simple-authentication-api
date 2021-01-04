const { hash } = require('bcryptjs');

const usersController = require('../controllers/usersController');

module.exports.execute = async ({ name, email, password }) => {
  const checkUserExists = await usersController.findByEmail(email);

  if (checkUserExists) {
    throw new Error('The email address has already used');
  }

  const hashedPassword = await hash(password, 8);

  const user = await usersController.create({
    name,
    email,
    password: hashedPassword,
  });

  return user;
};
