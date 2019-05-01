const mongoose = require('../connection.js');
const Schema = mongoose.Schema;

const Venue = new Schema({
	name: String,
	code: String,
	url: String,
	location: {
		street: String,
		city: String,
		nearestMetro: String
	}
});

module.exports = mongoose.model('Venue', Venue);
