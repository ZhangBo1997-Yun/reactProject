const jwt = require('./jwt')
const adminModel = require('../db/model/adminModel')
module.exports = (req, res, next) => {
    if (req.path == '/user/register') {
        next()
    } else {
        let { token, userName } = req.body
        if (!token) {
            return res.send({
                err: -997,
                msg: 'token缺失'
            })
        }
        adminModel.findOne({ userName })
            .then((data) => {
                if (data.token === token) {
                    next()
                } else {
                    throw false
                }
            })
            .catch(() => {
                res.send({
                    err: -998,
                    msg: 'token失效'
                })
            })
    }
}