const userService = require('../services/user.service');

const getAll = async (req, res) => {
  try {
    const users = await userService.getAll();
    console.log("Usuários recuperados com sucesso:", users); // Adicionando log para os usuários recuperados
    return res.status(200).json({ users });
  } catch (e) {
    console.error("Erro ao recuperar usuários:", e.message); // Adicionando log para o erro
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
};
