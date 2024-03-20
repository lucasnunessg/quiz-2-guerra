const userService = require('../services/user.service');

const getAll = async (req, res) => {
  try {
    const users = await userService.getAll();
    console.log("Usuários recuperados com sucesso:", users); 
    return res.status(200).json({ users });
  } catch (e) {
    console.error("Erro ao recuperar usuários:", e.message); 
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  try{
    const { id } = req.params;
    const users = await userService.getById(id);
    return res.status(200).json(users);
  } catch(e){
    console.error("Erro ao achar o usuário!", e.message);
    res.status(500).json({ message: 'Ocorreu um erro!' })
  }
};

const getByIdAndEmail = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.query;
    const users = await userService.getByIdAndEmail(id, email);
    return res.status(200).json(users);
  } catch(e){
    console.error("erro ao encontrar usuário!", e.message);
    res.status(500).json({ message: "Ocorreu um erro!" })
  }
};

module.exports = {
  getAll,
  getById,
  getByIdAndEmail
};
