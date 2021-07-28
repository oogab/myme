const express = require('express')
const bcrypt = require('bcrypt')
const { User } = require('../models')
const passport = require('passport')
const { isLoggedIn, isNotLoggedIn } = require('./middlewares')

const router = express.Router()

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

router.post('/login', isNotLoggedIn, async (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError)
      return next(authError)
    }
    if (!user) {
      return res.redirect(`/?loginError=${info.message}`)
    }
    return req.login(user, (loginError) => {
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
      return res.json(fullUserWithoutPassword)
    })
  })(req, res, next) // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다!
})

router.get('/logout', isLoggedIn, (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

module.exports = router
