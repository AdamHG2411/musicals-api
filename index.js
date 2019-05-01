const express = require('express');
const parser = require('body-parser');
const app = express();
const musicalRouter = require('./routes/musicalRouter.js');
const performanceRouter = require('./routes/performanceRouter.js');
const venueRouter = require('./routes/venueRouter.js');

app.use(
	parser.urlencoded({
		extended: true
	})
);
app.use(parser.json());

app.use('/api/musicals/', musicalRouter);
app.use('/api/venues/', venueRouter);
app.use('/api/performances/', performanceRouter);

app.listen(4000, () => {
	console.log('do you hear the people sing on 4000?');
});
