const userModel = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: {
    type: DataTypes.STRING,
    unique: true,
    },
    contact: DataTypes.STRING,
    
  }, {
    tableName: 'Users',
    underscored: true,
    timestamps: false,
  });

  return User;
};

module.exports = userModel;