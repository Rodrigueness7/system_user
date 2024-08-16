const User = require('../model/user')

const addUser = async (req, res) => {
  try {
    const user = new User(req.body)
    user.insertUser(user)
    await res.send({data: "Add" })
  } catch (error) {
    res.send(error.message)
  }
}

const findAll = async (req, res) => {
  try {
    const values = (await User.findAllUser()).map(
      value => {
        return value.dataValues
      }
    )
    res.send(values)
  } catch (error) {
    res.send(error.message)
  }
}


module.exports = {addUser, findAll}