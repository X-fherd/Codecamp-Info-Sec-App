const express = require('express');
const app = express();
const helmet = require('helmet');


// My Code








module.exports = app;
const api = require('./server.js');
app.use(helmet.noSniff());
app.use(helmet.xssFilter());
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({action: 'deny'}));
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`X-fherd freecodecamp Info-Sec Application started on port ${port}`);
});
