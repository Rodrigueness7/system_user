const dbUser = require('../constant/dbUser')
const {Sequelize} = require('sequelize')

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

    async insertUser(data) {
        await dbUser.create(data);
    };

    static findAllUser() {
        const user = dbUser.findAll();
        return user
    };
}

module.exports = User;