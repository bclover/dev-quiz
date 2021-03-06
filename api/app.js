// Full Documentation - https://www.turbo360.co/docs
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID});
var cors = require('cors');

// const app = vertex.app() // initialize app

/*	Apps can also be initialized with config options as shown in the commented out example below. Options
	include setting views directory, static assets directory, and database settings. To see default config
	settings, view here: https://www.turbo360.co/docs */

const config = {
	views: 'views', 		  // Set views directory
	static: 'public', 		// Set static assets directory
	db: { 					      // Database configuration. Remember to set env variables in .env file: MONGODB_URI, PROD_MONGODB_URI
		url: (process.env.TURBO_ENV == 'dev') ? process.env.MONGODB_URI : process.env.PROD_MONGODB_URI,
		// url: 'mongodb://localhost/frontend-quiz-db',
		type: 'mongo',
		onError: (err) => {
			console.log('DB Connection Failed!')
		},
		onSuccess: () => {
			console.log('frontend-quiz-db successfully connected!')
		}
	}
};

const app = vertex.app(config); // initialize app with config options
app.use(cors());

// import routes
const index = require('./routes/index');
const api = require('./routes/api');

// set routes
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/', index);
app.use('/api', api); // sample API Routes

module.exports = app;