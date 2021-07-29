/**
   * @swagger
   *  components:
   *    schemas:
   *      User:
   *        type: object
   *        properties:
   *          name:
   *            type: string
   *          email:
   *            type: string
   *            format: email
   *            description: Email for the user, needs to be unique.
   *          nickname:
   *            type: string
   *            description: Nickname for the user, needs to be unique.
   *          password:
   *            type: string
   *            format: password
   *          gender:
   *            type: string
   *          age:
   *            type: integer
   *          address:
   *            type: string
   *          phone_number:
   *            type: string
   */
module.exports = (sequelize, DataTypes) => {
  const Habit = sequelize.define('Habit', { // MySQL에는 users 테이블 생성
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      time_required: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })

  Habit.associate = (db) => {
    db.Habit.belongsTo(db.User)
  }

  return Habit
}