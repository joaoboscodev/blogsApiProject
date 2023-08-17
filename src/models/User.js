const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    underscored: true
  });

  return User;
};

module.exports = UserModel;