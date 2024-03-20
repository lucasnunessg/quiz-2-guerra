const { User } = require('../models');

const getAll = async () => {
  try {
    const users = await User.findAll();
    console.log("Usuários encontrados no banco de dados:", users); // Adicionando log para os usuários encontrados
    return users;
  } catch (error) {
    console.error("Erro ao buscar usuários no banco de dados:", error.message); // Adicionando log para o erro
    throw error; // Propagando o erro para cima
  }
};

module.exports = {
  getAll,
};
