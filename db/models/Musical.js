const mongoose = require('../connection.js');
const Schema = mongoose.Schema;

const Musical = new Schema({
	name: String,
	premiereYear: Number,
	synopsis: String,
	spotifyURL: String,
	awards: [ String ]
});

module.exports = mongoose.model('Musical', Musical);
