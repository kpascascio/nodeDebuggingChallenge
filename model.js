function UserModel(sequelize, DataTypes) {
    const User = sequelize.define('user', {
        first_name: DataTypes.String,
        last_name: DataTypes.STRING,
        age: DataTypes.INTERGER
    })
    return User
}

module.exports = UserModel;