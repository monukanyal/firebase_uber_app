/*
  #####  ### ##### #### ####   ###   ###  ###  ##### #####
  #     #    #     #    #   # #   # #    #   # #       #
  ###    ##  ###   ###  ####  #####  ##  #   # ###     #
  #        # #     #    #  #  #   #    # #   # #       #
  ##### ###  #     #### #   # #   # ###   ###  #       #
*/

const path = require('path');
var morgan = require('morgan'); //http request logger
const express = require('express');
const flash = require('connect-flash');
const fileUpload = require('express-fileupload');
const session = require('express-session');
var app = express();
var port =process.env.PORT || 8080;
app.listen(port);

const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'fav.png')));
app.use(fileUpload());
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());
app.use(flash());
app.use(session({
  secret:'blackcat',
  resave: false,
  saveUninitialized: true,
  //store: new MongoStore({ url: 'mongodb://esfera:esfera@ds251277.mlab.com:51277/passpo' }),
  cookie: { maxAge: 60000,secure: true }
}));

app.use('/static', express.static(path.join(__dirname, 'public')))

//app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

/*------routes Define---------------------*/
const routes = require('./routes/index.js');
const routes2 = require('./routes/dashboard.js');
app.use('/', routes);
app.use('/dashboard', routes2);
/*---------routes end---------------------*/



console.log("Express server listening on port:" + port);

