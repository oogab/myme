const express = require('express')
const multer = require('multer')
const path = require('path')
const multerS3 = require('multer-s3')
const AWS = require('aws-sdk')

const { Challenge, User, Comment, ChallengeParticipation } = require('../models')
const { isLoggedIn } = require('./middlewares')
const router = express.Router()

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
})

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: 'ssafymyme',
    key(req, file, cb) {
      cb(null, `original/${Date.now()}_${encodeURIComponent(path.basename(file.originalname))}`)
    }
  }),
  limits: { fileSize: 20*1024*1024 } // 20MB
})

/**
 * @swagger
 *  /challenge:
 *    get:
 *      tags:
 *        - challenge
 *      description: 챌린지 목록 가져오기
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
 *                  img_addr:
 *                    type: string
 *                  content:
 *                    type: text
 *                  start_date:
 *                    type: date
 *                  period:
 *                    type: integer
 *                  repeat_cycle:
 *                    type: integer
 *                  auth_count:
 *                    type: integer
 *                  UserId:
 *                    type: integer
 *                  User:
 *                    type: array
 *                    description: 어떤 형태로 들어올지 모르겠다.
 *                  Comments:
 *                    type: array
 *                    description: 어떤 형태로 들어올지 모르겠다.
 * 
 */
router.get('/', async (req, res, next) => { // GET /challenge
  try {
    const where = {}
    const challenges = await Challenge.findAll({
      where,
      limit: 10,
      order: [
        ['createdAt', 'DESC']
      ],
      include: [{
        model: User,
        attributes: ['id', 'nickname']
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname']
        }]
      }]
    })
    res.status(200).json(challenges)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

/**
 * @swagger
 *  /mychallenge:
 *    get:
 *      tags:
 *        - challenge
 *      description: 내가 생성한 챌린지 목록 가져오기
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
 *                  img_addr:
 *                    type: string
 *                  content:
 *                    type: text
 *                  start_date:
 *                    type: date
 *                  period:
 *                    type: integer
 *                  repeat_cycle:
 *                    type: integer
 *                  auth_count:
 *                    type: integer
 *                  UserId:
 *                    type: integer
 *                  User:
 *                    type: array
 *                    description: 어떤 형태로 들어올지 모르겠다.
 *                  Comments:
 *                    type: array
 *                    description: 어떤 형태로 들어올지 모르겠다.
 */
router.get('/mychallenge', isLoggedIn, async (req, res, next) => { // GET /mychallenge
  try {
    const where = { UserId: req.user.id }
    const myChallenges = await Challenge.findAll({
      where,
      order: [
        ['createdAt', 'DESC']
      ],
      include: [{
        model: User,
        attributes: ['id', 'nickname']
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname']
        }]
      }]
    })
    res.status(200).json(myChallenges)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

/**
 * @swagger
 *  /challenge:
 *    post:
 *      tags:
 *        - challenge
 *      description: 챌린지 생성하기
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
 *                  content:
 *                    type: text
 *                  start_date:
 *                    type: date
 *                  period:
 *                    type: integer
 *                  repeat_cycle:
 *                    type: integer
 *                  auth_count:
 *                    type: integer
 *              example:
 *                id: 1
 *                name: '하루 10분 명상하기'
 *                content: '하루 10분 명상을 통해 내면의 평화를 찾아봅시다.'
 *                start_date: 2021-08-02
 *                period: 21
 *                repeat_cycle: 1
 *                auth_count: 1
 */
router.post('/', isLoggedIn, upload.none(), async (req, res, next) => { // POST /challenge
  try {
    // console.log(req.user)
    const challenge = await Challenge.create({
      name: req.body.name,
      image_addr: req.body.image_addr,
      content: req.body.content,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      period: req.body.period,
      certification_cycle: req.body.certification_cycle,
      total_number_of_certification: req.body.total_number_of_certification,
      UserId: req.user.id,
      CategoryId: ''
    })
    const fullChallenge = await Challenge.findOne({
      where: { id: challenge.id },
      include: [{
        model: User, // 챌린지 개설자 아이디
        attributes: ['id', 'nickname']
      }]
    })
    res.status(200).json(fullChallenge)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

/**
 * @swagger
 *  /challenge/image:
 *    post:
 *      tags:
 *        - challenge
 *      description: 챌린지 대표 이미지 생성하기
 *      responses:
 *        '200':
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  data:
 *                    type: string
 *                    description: S3에 저장된 사진의 주소
 *                  
 */
router.post('/image', isLoggedIn, upload.single('image'), async (req, res, next) => { // POST /challenge/image
  console.log(req.file)
  res.json(req.file.location)
})

module.exports = router