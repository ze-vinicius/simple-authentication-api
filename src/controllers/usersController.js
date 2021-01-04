const { User } = require('../config/db');

module.exports = {
  create: async ({ name, email, password }) => {
    const user = await User.create({
      name,
      email,
      password,
    });

    return user;
  },
  findByEmail: async email => {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    return user;
  },
};
