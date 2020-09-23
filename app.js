const express = require('express');
const httpStatus = require('http-status');

const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');

const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const passport = require('passport');

const appReqLimiter = require('./utils/appReqLimiter');
const loggerDisplay = require('./utils/loggerDisplay');
const statusMoniter = require('./utils/statusMoniter');

const LocalStrategy = require('./src/utils/local-strategy');

require('dotenv').config();

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: false 
}));//json body setting
app.use(bodyParser.json());
app.use(cookieParser());
app.use(methodOverride('X-HTTP-Method-Override'));
app.disable('x-powered-by');

app.use(helmet());
app.use(cors());
app.use(compression());

appReqLimiter(app);
loggerDisplay(app);
statusMoniter(app);

app.use(require('./src/routes'));

app.use(passport.initialize());
// app.use(passport.session());
LocalStrategy(passport);

app.use(function (req, res) {
    return res.status(httpStatus.NOT_FOUND).json(`Requested Route not found ${req.url}`);
});

module.exports = app;
