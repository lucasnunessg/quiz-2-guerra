const { User } = require('../models');

const getAll = async () => {
  const user = await User.findAll();
  return user;
}

const getById = async (id) => {
  const user = await User.findByPk({where: {id}});
  return user;
};

const getByIdAndEmail = async (id, email) => {
  const user = await User.findOne({ where: { id, email } });
  return user;
};

module.exports = {
  getAll,
  getById,
  getByIdAndEmail
}