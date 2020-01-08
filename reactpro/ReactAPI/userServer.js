const express = require("express");
const app = express();
const path = require('path');
// post 数据解析
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const db = require("./db/connect.js");

app.use('/static', express.static(path.join(__dirname, 'public')))

// 管理平台接口
const admin = require('./admin/admin')
const tokenMiddleWare = require('./utils/token')
app.use('/v1/admin', tokenMiddleWare, admin)
app.listen(3003, (res) => {
	console.log('server start in ' + 3003)
})
