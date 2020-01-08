const express = require('express')
const router = express.Router()
const jwt = require('../../utils/jwt')
const adminModel = require('../../db/model/adminModel')
const crypto = require('crypto')

/*********************   登录   ****************************/
router.post('/login', async (req, res) => {
  let { userName, passWord } = req.body
  adminModel.findOne({ userName })
    .then((data) => {
      if (data) {
        console.log(data._id)
        const hash = crypto.createHash('sha256');
        hash.update(passWord);
        if (data.passWord == hash.digest('hex')) {
          //生产token值  并且发送到客户端
          let token = jwt.createToken({ userName }, 60 * 60);
          adminModel.updateMany({ _id: data._id }, { token: token })
            .then(() => {
              res.send({ err: 0, msg: '登录成功', token: token })
            })
        } else {
          res.send({ err: -1, msg: '密码错误' })
        }
      } else {
        res.send({ err: -1, errMsg: '该账号未注册，请注册后在登录' })
      }
    })
})
/*********************   注册   ****************************/
router.post('/register', async (req, res) => {
  let { userName, passWord } = req.body
  let data = await adminModel.findOne({ userName });
  if (data) {
    res.send({ err: -1, msg: '用户名重复' })
  } else {
    const hash = crypto.createHash('sha256');
    hash.update(passWord);
    //hash.digest('hex')
    const token = jwt.createToken({ userName }, 60 * 60)
    let ctime = new Date().getTime();
    adminModel.insertMany({ userName, passWord: hash.digest('hex'), token, ctime })
      .then((data) => {
        let _id = data[0]._id
        res.json({ err: 1, msg: '注册成功', token, ctime, _id })
      })
  }
})
/*********************   退出   ****************************/
router.post('/logout', (req, res) => {
  let { _id } = req.body
  adminModel.updateMany({ _id: _id }, { token: '' })
    .then(() => {
      res.send({ err: 0, msg: '退出成功，您已安全退出' })
    })
})

module.exports = router