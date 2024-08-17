const User = require('../model/user');

const addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    user.insertUser(user)
    await res.send({ data: "Add" });
  } catch (error) {
    res.send(error.message);
  }
};

const findAll = async (req, res) => {
  try {
    const values = (await User.findAllUser()).map(
      value => {
        return value.dataValues;
      }
    );
    res.send(values);
  } catch (error) {
    res.send(error.message);
  }
};

const findByUser = async (req, res) => {
  try {
    await User.findByIdUser(req.params.id, res);
  } catch (error) {
    res.send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.updateUser(req.params.id, user);
    res.send('updated');
  } catch (error) {
    res.send(error.message);
  }
};

const removeUser = async (req, res) => {
  try {
    User.removerUser(req.params.id);
    res.send('Delete');
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { addUser, findAll, findByUser, updateUser, removeUser };