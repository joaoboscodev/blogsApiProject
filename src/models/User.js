const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    underscored: true,
    timestamps: false
  });

  User.associate = (models) => {
    User.hasMany(
      models.BlogPost,
      {
      foreingKey: 'userId',
      as: 'users'
      }
    )
  }

  return User;
};

module.exports = UserModel;