const mogoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mogoose.connect('mongodb://localhost/tasks')