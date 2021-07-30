const express = require('express')
const bcrypt = require('bcrypt')
const { User } = require('../models')
const passport = require('passport')
const { isLoggedIn, isNotLoggedIn } = require('./middlewares')

const router = express.Router()

/**
 * @swagger
 *  /auth:
 *    post:
 *      tags:
 *        - user
 *      description: 회원 가입
 *      responses:
 *        '200':
 *          description: 회원 가입 성공
 */
router.post('/join', isNotLoggedIn, async (req, res, next) => {
  const {
    name,
    email,
    nickname,
    password,
    gender,
    age,
    address,
    phone_number
  } = req.body

  try {
    const exUser = await User.findOne({ where: {email: email} })
    if (exUser) {
      return res.redirect('/join?error=exist')
    }
    const hashedPassword = await bcrypt.hash(password, 12)
    await User.create({
      name,
      email,
      nickname,
      password: hashedPassword,
      gender,
      age,
      address,
      phone_number
    })
    return res.status(201).send('ok')
  } catch (error) {
    console.error(error)
    return next(error)
  }
})

/**
 * @swagger
 *  /auth/login:
 *    post:
 *      tags:
 *        - user
 *      description: 사용자 로그인 요청
 *      responses:
 *        '200':
 *          description: 로그인 성공
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *                  email:
 *                    type: string
 *                  nickname:
 *                    type: string
 *                  gender:
 *                    type: string
 *                  phone_number:
 *                    type: string
 *                  createdAt:
 *                    type: date
 *                  updatedAt:
 *                    type: date
 *        '403':
 *          description: 로그인 실패, 존재하지 않는 유저
 */
router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError)
      return next(authError)
    }
    if (!user) {
      return res.status(403).send(info.message)
    }
    return req.login(user, async (loginError) => {
      if (loginError) {
        console.error(loginError)
        return next(loginError)
      }
      // 세션 쿠키를 브라우저로 보내준다!
      const fullUserWithoutPassword = await User.findOne({
        where: {
          id: user.id
        },
        attributes: {
          exclude: ['password']
        }
      })
      return res.status(200).json(fullUserWithoutPassword)
    })
  })(req, res, next) // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다!
})

router.get('/logout', isLoggedIn, (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

module.exports = router
