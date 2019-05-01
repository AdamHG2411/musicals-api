const mongoose = require('../connection.js');
const Schema = mongoose.Schema;

const Performance = new Schema({
	musical: String,
	musicalsId: String,
	venue: String,
	venueId: String,
	dates: {
		start: Date,
		end: Date
	},
	tickets: {
		min: Number,
		max: Number,
		buy: String
	}
});

module.exports = mongoose.model('Performance', Performance);
