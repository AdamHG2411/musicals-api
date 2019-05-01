const mongoose = require('../connection.js');
const Schema = mongoose.Schema;

const Venue = new Schema({
	name: String,
	code: String,
	url: String
});

module.exports = mongoose.model('Venue', Venue);
