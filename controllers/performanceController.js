const Performance = require('../db/models/Performance.js');
const Musical = require('../db/models/Musical.js');
const Venue = require('../db/models/Venue.js');

module.exports = {
	index: (req, res) => {
		Performance.find({}).then((performances) => {
			res.json(performances);
		});
	},
	findById: (req, res) => {
		Performance.findOne({ _id: req.params.id }).then((performance) => {
			res.json(performance);
		});
	},
	findByMusical: (req, res) => {
		Performance.find({ musicalName: req.params.musical }).then((performance) => {
			res.json(performance);
		});
	},
	findByVenue: (req, res) => {
		Performance.find({ venueCode: req.params.venue }).then((performances) => {
			res.json(performances);
		});
	},
	create: (req, res) => {
		Performance.create(req.body).then((performance) => {
			Musical.findOne({ name: performance.musicalName }).then((musical) => {
				Venue.findOne({ code: performance.venue }).then((venue) => {
					performance.musicalId = musical._id;
					performance.venueId = venue._id;
					performance.venueName = venue.name;
					performance.save();
					res.json(performance);
				});
			});
		});
	},
	update: (req, res) => {
		Performance.updateOne({ _id: req.params.id }, req.body).then((performance) => {
			res.json(performance);
		});
	},
	delete: (req, res) => {
		Performance.deleteOne({ _id: req.params.id }).then((performance) => {
			res.json(performance);
		});
	}
};
