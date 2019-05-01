const mongoose = require('./connection.js');
const musicals = require('./data/musicals.json');
const Musical = require('./models/Musical.js');
const venues = require('./data/venues.json');
const Venue = require('./models/Venue.js');
const performances = require('./data/performances.json');
const Performance = require('./models/Performance.js');

Musical.find({}).deleteMany(() => {
	Venue.find({}).deleteMany(() => {
		Performance.find({}).deleteMany(() => {
			Musical.create(musicals).then(() => {
				Venue.create(venues).then(() => {
					Performance.create(performances).then(() => {
						Performance.find({}).then((performances) => {
							performances.forEach((thisPerformance) => {
								Musical.findOne({ name: thisPerformance.musicalName }).then((musical) => {
									Performance.update(thisPerformance, { musicalId: musical._id }).then(() => {
										Venue.findOne({ code: thisPerformance.venue }).then((venue) => {
											Performance.update(thisPerformance, { venueId: venue._id }).then(() => {
												thisPerformance.save();
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
});
