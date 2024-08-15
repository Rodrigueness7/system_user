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
    console.log(User.findAllUser())
    res.send('feito')
  } catch (error) {
    res.send(error.message)
  }
}


module.exports = {addUser, findAll}