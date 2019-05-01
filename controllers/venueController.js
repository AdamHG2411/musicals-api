const Venue = require('../db/models/Venue.js');

module.exports = {
	index: (req, res) => {
		Venue.find({}).then((venues) => {
			res.json(venues);
		});
	},
	findById: (req, res) => {
		Venue.findOne({ _id: req.params.id }).then((venue) => {
			res.json(venue);
		});
	},
	findByName: (req, res) => {
		Venue.findOne({ name: req.params.name }).then((venue) => {
			res.json(venue);
		});
	},
	findByCode: (req, res) => {
		Venue.findOne({ code: req.params.code }).then((venue) => {
			res.json(venue);
		});
	},
	create: (req, res) => {
		Venue.create(req.body).then((venue) => {
			res.json(venue);
		});
	},
	update: (req, res) => {
		Venue.updateOne({ _id: req.params.id }, req.body).then((venue) => {
			res.json(venue);
		});
	},
	delete: (req, res) => {
		Venue.deleteOne({ _id: req.params.id }).then((venue) => {
			res.json(venue);
		});
	}
};
