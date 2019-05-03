const mongoose = require('./connection.js');
const musicals = require('./data/musicals.json');
const Musical = require('./models/Musical.js');
const venues = require('./data/venues.json');
const Venue = require('./models/Venue.js');
const performances = require('./data/performances.json');
const Performance = require('./models/Performance.js');

//find all and delete
Musical.find({}).deleteMany(() => {
	Venue.find({}).deleteMany(() => {
		Performance.find({}).deleteMany(() => {
			//create all from json files
			Musical.create(musicals).then(() => {
				Venue.create(venues).then(() => {
					Performance.create(performances).then(() => {
						//find all performances
						Performance.find({}).then((performances) => {
							//for each performance
							performances.forEach((thisPerformance) => {
								//find matching musical and connect musicalId
								Musical.findOne({ name: thisPerformance.musicalName }).then((musical) => {
									Performance.updateOne(thisPerformance, { musicalId: musical._id }).then(() => {
										//find matching venue and connect venueId
										Venue.findOne({ code: thisPerformance.venueCode }).then((venue) => {
											Performance.updateOne(thisPerformance, {
												venueId: venue._id,
												venueName: venue.name
											}).then(() => {
												//Save this performance
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
