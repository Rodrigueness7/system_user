const User = require('../model/user')

const findUser = async (req, res) => {
    const user = new User(req.body)
    user.insertUser(user)
    await res.send({data: "find" })
}


module.exports = {findUser}