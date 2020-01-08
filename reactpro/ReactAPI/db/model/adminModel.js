const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let adminSchema = new Schema({
    userName: { type: String, required: true },
    passWord: { type: String, required: true },
    token: { type: String },
    ctime: { type: Date, default: Date.now }

})

let adminsModel = mongoose.model('admins', adminSchema)
module.exports = adminsModel