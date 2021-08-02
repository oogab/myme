const express = require('express')
const bcrypt = require('bcrypt')
const { User } = require('../models')
const passport = require('passport')
const { isLoggedIn, isNotLoggedIn } = require('./middlewares')

const router = express.Router()

router.get('/', async (req, res, next) => { // GET /user
  try {
    if (req.user) {
      const user = await User.findOne({
        where: { id: req.user.id }
      })
      res.status(200).json(user)
    } else {
      res.status(200).json(null)
    }
  } catch (error) {
    console.error(error)
    next(error)
  }
})

/**
 * @swagger
 *  /user:
 *    post:
 *      tags:
 *        - user
 *      description: 회원 가입
 *      responses:
 *        '200':
 *          description: 회원 가입 성공
 */
router.post('/join', isNotLoggedIn, async (req, res, next) => { // POST /user/join
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
 *  /user/login:
 *    post:
 *      tags:
 *        - user
 *      description: 사용자 로그인 요청
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *      responses:
 *        '200':
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: integer
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
 *              example:
 *                id: 1
 *                name: '백상욱'
 *                email: 'oogab@naver.com'
 *                nickname: 'wook'
 *                gender: '남'
 *                phone_number: '01032216063'
 *        '403':
 *          description: 로그인 실패, 존재하지 않는 유저
 */
router.post('/login', isNotLoggedIn, (req, res, next) => {  // POST /user/login
  passport.authenticate('local', (error, user, info) => {
    if (error) { // 서버 에러
      console.error(error)
      return next(error)
    }
    if (info) { // 클라이언트 에러
      return res.status(401).send(info.reason)
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

router.post('/logout', isLoggedIn, (req, res) => {
  req.logout()
  req.session.destroy()
  res.send('ok')
})

module.exports = router
