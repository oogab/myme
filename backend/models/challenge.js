module.exports = (sequelize, DataTypes) => {
  const Challenge = sequelize.define('Challenge', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    img_addr: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    period: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    repeat_cycle: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    auth_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci'
  })

  Challenge.associate = (db) => {
    db.Challenge.belongsTo(db.User)
  }

  return Challenge
}