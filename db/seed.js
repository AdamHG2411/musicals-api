const mongoose = require('./connection.js');
const musicals = require('./data/musicals.json');
const Musical = require('./models/Musical.js');
const venues = require('./data/venues.json');
const Venue = require('./models/Venue.js');
const performances = require('./data/performances.json');
const Performance = require('./models/Performance.js');

Musical.find({}).deleteMany(() => {
	Musical.create(musicals);
});

Venue.find({}).deleteMany(() => {
	Venue.create(venues);
});

Performance.find({}).deleteMany(() => {
	Performance.create(performances);
});
