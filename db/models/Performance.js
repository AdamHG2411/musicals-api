const mongoose = require('../connection.js');
const Schema = mongoose.Schema;

const Performance = new Schema({
	musicalName: String,
	musicalId: String,
	musicalYear: Number,
	musicalComposer: String,
	musicalSpotify: String,
	venueName: String,
	venueCode: String,
	venueId: String,
	venueAddress: String,
	venueCity: String,
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
