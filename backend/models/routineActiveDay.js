module.exports = (sequelize, DataTypes) => {
  const RoutineActiveDay = sequelize.define('RoutineActiveDay', {
    active_day_of_week: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })

  RoutineActiveDay.associate = (db) => {
    db.RoutineActiveDay.belongsTo(db.Routine)
  }

  return RoutineActiveDay
}