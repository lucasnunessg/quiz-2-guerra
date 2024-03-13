const scoreModel = (sequelize, DataTypes) => {
  const Score = sequelize.define('Score', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    score: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'scores', 
    timestamps: false, 
    
  });

  

  return Score;
}

module.exports = scoreModel;
