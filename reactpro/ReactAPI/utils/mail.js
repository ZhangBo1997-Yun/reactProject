const nodemailer = require('nodemailer');
// 创建发送邮件的对象
let transporter = nodemailer.createTransport({
  host: "smtp.qq.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: '1315367440@qq.com', // generated ethereal user
    pass: 'cedevcaegfmhgdie'// smtp 验证码
  }
});
module.exports = {
  send(mail, code) {
    // 邮件的内容
    let info = {
      from: '"Fred Foo 👻" <1315367440@qq.com>', // 发送者邮箱
      to: mail, // 接受者
      subject: '呵呵哒', // 标题
      // text: , // plain text body
      html: `<h3>欢迎注册您的验证码是：${code} </h3>` // 发送HTML格式的邮箱
    }
    return new Promise((resolve, reject) => {
      transporter.sendMail(info, (err, result) => {
        if (err) {
          reject()
        } else {
          resolve()
        }
      });
    })
  }
}
