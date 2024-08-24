const dbUser = require('../constant/dbUser')
const { Sequelize, Op } = require('sequelize')

class User {
    idUser;
    name;
    username;
    password;
    email;

    constructor(data) {
        this.id_user = data.id;
        this._name = data.name;
        this._username = data.username;
        this._password = data.password;
        this._email = data.email;
    };

    get id_user() {
        return this.idUser;
    };

    set id_user(value) {
        if (value === undefined) {
            return this.idUser = 0;
        }
        return this.idUser = value;
    };

    get _name() {
        return this.name;
    };

    set _name(value) {
        if (value === undefined) {
            throw new Error('Name invalid');
        }
        return this.name = value;
    };

    get _username() {
        return this.username;
    };

    set _username(value) {
        if (value === undefined) {
            throw new Error('Username invalid');
        }
        return this.username = value;

    };

    get _password() {
        return this.password;
    };

    set _password(value) {
        if (value === undefined) {
            throw new Error('Password invalid');
        }
        return this.password = value;
    };

    get _email() {
        return this.email
    };

    set _email(value) {
        if (value === undefined) {
            throw new Error('Email invalid');
        }
        return this.email = value

    };

    async insertUser(data, username, email, res) {
        const existUser = await dbUser.findOne({ where: { [Op.or]: [{ username }, { email }] } })
        try {
            if (existUser) {
                throw new Error('User already exists')
            }
            await dbUser.create(data)
            res.send('successfully created')
        } catch (error) {
            res.send(error.message)
        }
    };

    static async findAllUser(res) {
        const findUsers = (await dbUser.findAll()).map(
            users => {
               return users.dataValues
               
            }
        )
        res.send(findUsers)
        
    };

    static findByIdUser(req, res) {
        const valueId = dbUser.findByPk(req);
        const idUser = valueId.then(
            searchUser => {
                res.send(searchUser)
            }
        )

        return idUser;
    };

    async updateUser(req, data) {
        const valueId = await dbUser.findByPk(req);

        valueId.name = data.name,
            valueId.username = data.username,
            valueId.password = data.password,
            valueId.email = data.email

        return await valueId.save();
    };

    static removerUser(req) {
        const valueId = dbUser.findByPk(req);
        const remover = valueId.then(
            removerData => {
                return removerData.destroy()
            }
        )
        return remover;
    }

    static findUser(req, res) {
        const user = dbUser.findOne({ where: req})
        user.then(
            data => {
              try {
                if (!data) {
                    throw new Error('Username or Password invalid')
                }
                res.send('Logged in user')
              } catch (error) {
                res.send(error.message)
              }
            }
        )
        return user
    }
}

module.exports = User;