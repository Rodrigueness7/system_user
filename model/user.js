class User {
    idUser;
    name;
    username;
    password;
    email;
    idProfile;

    constructor(data) {
        this.id_user = data.id;
        this._name = data.name;
        this._username = data.username;
        this._password = data.password;
        this._email = data.email;
        this.id_profile = data.idProfile;
      
    }

    get id_user() {
        return this.idUser;
    }

    set id_user(value) {
        if (value === undefined) {
            return this.idUser = 0;
        }
        return this.idUser = value;

    }

    get _name() {
        return this.name;
    }

    set _name(value) {
      try {
          if (value === undefined) {
            throw new Error('Name invalid');
        }
        return this.name = value;

      } catch (error) {
        console.log(error.message)
      }
    }

    get _username() {
        return this.username;
    }

    set _username(value) {
        try {
          if (value === undefined) {
            throw new Error('Username invalid')
        }
        return this.username = value;  

        } catch (error) {
            console.log(error.message)
        }

    };

    get _password() {
        return this.password;
    };

    set _password(value) {
       try {
         if (value === undefined) {
            throw new Error('Password invalid');
        }
        return this.password = value;

       } catch (error) {
        console.log(error.message)
       }

    };

    get _email() {
        return this.email
    }

    set _email(value) {
    try {
        if (value === undefined) {
            throw new Error('Email invalid')
        }
         return this.email = value
    } catch (error) {
        console.log(error.message)
    }
        
        
    }

    get id_profile() {
        return this.idProfile;
    }

    set id_profile(value) {
       try {
         if (value === undefined) {
            throw new Error('idProfile invalid')
        }
        return this.idProfile = value;
       } catch (error) {
        console.log(error.message)
       }
        
    }

     insertUser(data) {
        console.log(data)
    }
}

module.exports = User;