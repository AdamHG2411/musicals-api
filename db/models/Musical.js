const mongoose = require('../connection.js');
const Schema = mongoose.Schema;

const Musical = new Schema({
	name: String,
	premiereYear: Date,
	synopsis: String,
	spotifyURL: String,
	awards: Array
});

module.exports = mongoose.model('Musical', Musical);
