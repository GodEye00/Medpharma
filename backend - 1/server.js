require('rootpath')();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require('_middleware/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));

// api routes

app.use('/admin_accounts', require('./accounts/accounts.admin_controller'));


// swagger docs route
app.use('/api-docs', require('_helpers/swagger'));

// global error handler
app.use(errorHandler);

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 88) : 5000;
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
