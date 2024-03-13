const userService = require ('../services/user.service');

const getAll = async (req, res) => {
  try {
    const user = await userService.getAll();
    return res.status(200).json({ user })
  } catch(e) {
   console.log(e.message);
   res.status(500).json({ message: 'Ocorreu um erro' }); 
  }
};

module.exports = {
  getAll,
};