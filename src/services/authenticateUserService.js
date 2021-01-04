const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');

const usersController = require('../controllers/usersController');
const authConfig = require('../config/auth');

module.exports.execute = async ({ email, password }) => {
  const user = await usersController.findByEmail(email);

  if (!user) {
    throw new Error('Invalid Credentials');
  }

  const passwordMatched = await compare(password, user.password);

  if (!passwordMatched) {
    throw new Error('Invalid credentials');
  }

  const { expiresIn, secret } = authConfig.jwt;

  const token = sign({}, secret, {
    subject: String(user.id),
    expiresIn,
  });

  return { user, token };
};
