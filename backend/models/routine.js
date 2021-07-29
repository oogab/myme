module.exports = (sequelize, DataTypes) => {
  const Routine = sequelize.define('Routine', { // MySQL에는 users 테이블 생성
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      alarm: {
        type: DataTypes.BOOLEAN,
        allowNull: false,      
      }
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })

  Routine.associate = (db) => {
    db.Routine.belongsTo(db.User)
  }

  return Routine
}