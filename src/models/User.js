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
    timestamps: false,
    tableName: 'users'
  });

  User.associate = (models) => {
    User.hasMany(
      models.BlogPost,
      {
        foreignKey: 'userId',
        as: 'users'
      }
    )
  }

  return User;
};

module.exports = UserModel;