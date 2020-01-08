const jwt = require('jsonwebtoken');
const screat = 'hdkasjhd;bsdjfkaj;uhytvkij'
module.exports = {
    //生成token
    createToken(payload, expires) {
        let token = jwt.sign(payload, screat, { expiresIn: expires })
        return token
    },
    //解析token
    verifyToken(token) {
        return jwt.verify(token, screat)
    }
}
