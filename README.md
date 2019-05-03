# musicals-api
This is a musicals API I created for my second project in General Assembly's Software Engineering Immersive. All data was collected from my own knowledge, the websites for each venue, and/or Wikipedia.

The database was created on MongoDB and hosted on Atlas. The API was created with Node.js, Express, and Mongoose, and it has been deployed to [Heroku](http://musicals-api.herokuapp.com/api/performances). The API has a RESTful design and full CRUD functionality.

Please note that this repository/readme is specifically for the backend API I created. While you can query the data where it's hosted on Heroku, it isn't very accessible to non-developers. I've also created a front-end specifically for listing upcoming performances in DC. It's still in progress, but it's available [here](http://dc-musicals.herokuapp.com).

The database is divided into three collections, each with their own schema:
* [Performances](https://musicals-api.herokuapp.com/api/performances)
* [Musicals](https://musicals-api.herokuapp.com/api/musicals)
* [Venues](https://musicals-api.herokuapp.com/api/venues)

## Performances
The Performance Schema is structured as follows:

```
const Performance = new Schema({
	musicalName: String,
	musicalId: String,
	venueName: String,
	venueCode: String,
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
```
It's worth noting that the Dates are stored as ISODates and that the musicalId, venueName, and venueId fields are generated automatically based on matching musicalName and venueCode in the musicals and venues collections. This works for me because I intend to be the person maintaining this database, but I would update the structure or incorporate some form of data validation when making post or put requests.

This collection can be queried through any of the following requests:

**Retrieve all performances from database:**

GET: https://musicals-api.herokuapp.com/api/performances/

**Retrieve one performance using its ObjectID:**

GET: https://musicals-api.herokuapp.com/api/performances/id/:id
(replace :id with the particular ID you're searching for)

**Retrieve all performances of a particular musical:**
GET: https://musicals-api.herokuapp.com/api/performances/musical/:musical
(replace :musical with the particular musical you're searching for - requires exact matching text)

**Retrieve all performances at a particular venue:**
GET: https://musicals-api.herokuapp.com/api/performances/venue/:venue
(replace :venue with the code of the particular venue you're searching for - requires exact matching text)

**Create a new performance from the body of the request (must adhere to schema):**
POST: https://musicals-api.herokuapp.com/api/performances/

**Update a performance by its ObjectID with the contents of the body of the request**
PUT: https://musicals-api.herokuapp.com/api/performances/id/:id
(replace :id with the ObjectId of the particular performance you want to update)

**Delete a performance by its ObjectID**
DELETE: https://musicals-api.herokuapp.com/api/performances/id/:id
(replace :id with the ObjectId of the particular performance you want to delete)

##Musicals
The Musical schema has the following structure:

```
const Musical = new Schema({
	name: String,
	premiereYear: Number,
	synopsis: String,
	spotifyURL: String,
	awards: [String]
});
```

This collection can be queried through any of the following requests:

**Retrieve all musicals from database:**
GET: https://musicals-api.herokuapp.com/api/musicals/

**Retrieve one musical using its ObjectID:**
GET: https://musicals-api.herokuapp.com/api/musicals/id/:id
(replace :id with the particular ID you're searching for)

**Retrieve one musical using its name:**
GET: https://musicals-api.herokuapp.com/api/musicals/:name
(replace :name with the name of the particular musical you're searching for)

**Create a new musical from the body of the request (must adhere to schema):**
POST: https://musicals-api.herokuapp.com/api/musicals/

**Update a musical by its ObjectID with the contents of the body of the request**
PUT: https://musicals-api.herokuapp.com/api/musicals/id/:id
(replace :id with the ObjectId of the particular musical you want to update)

**Delete a musical by its ObjectID**
DELETE: https://musicals-api.herokuapp.com/api/musicals/id/:id
(replace :id with the ObjectId of the particular musical you want to delete)

##Venues
The Venue schema follows this structure:

```
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
```

This collection can be queried through any of the following requests:

**Retrieve all venues from database:**
GET: https://musicals-api.herokuapp.com/api/venues/

**Retrieve one venue using its ObjectID:**
GET: https://musicals-api.herokuapp.com/api/venues/id/:id
(replace :id with the particular ID you're searching for)

**Retrieve one venue using its name:**
GET: https://musicals-api.herokuapp.com/api/venues/name/:name
(replace :name with the name of the particular venue you're searching for)

**Retrieve one venue using its code:**
GET: https://musicals-api.herokuapp.com/api/venues/:code
(I created four letter codes for each venue to reduce typing and room for errors; e.g., KCOH -> Kennedy Center Opera House)

**Create a new venue from the body of the request (must adhere to schema):**
POST: https://musicals-api.herokuapp.com/api/venues/

**Update a venue by its ObjectID with the contents of the body of the request**
PUT: https://musicals-api.herokuapp.com/api/venues/id/:id
(replace :id with the ObjectId of the particular venue you want to update)

**Delete a musical by its ObjectID**
DELETE: https://musicals-api.herokuapp.com/api/venues/id/:id
(replace :id with the ObjectId of the particular venue you want to delete)
