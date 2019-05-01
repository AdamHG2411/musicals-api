const Musical = require('../db/models/Musical.js');

module.exports = {
	index: (req, res) => {
		Musical.find({}).then((musicals) => {
			res.json(musicals);
		});
	},
	findById: (req, res) => {
		Musical.findOne({ _id: req.params.id }).then((musical) => {
			res.json(musical);
		});
	},
	findByName: (req, res) => {
		Musical.findOne({ name: req.params.name }).then((musical) => {
			res.json(musical);
		});
	},
	create: (req, res) => {
		Musical.create(req.body).then((musical) => {
			res.json(musical);
		});
	},
	update: (req, res) => {
		Musical.updateOne({ _id: req.params.id }, req.body).then((musical) => {
			res.json(musical);
		});
	},
	delete: (req, res) => {
		Musical.deleteOne({ _id: req.params.id }).then((musical) => {
			res.json(musical);
		});
	}
};
