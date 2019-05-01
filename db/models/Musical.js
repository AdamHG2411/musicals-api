const mongoose = require('../connection.js');
const Schema = mongoose.Schema;

const Musical = new Schema({
	name: String
});

module.exports = mongoose.model('Musical', Musical);
