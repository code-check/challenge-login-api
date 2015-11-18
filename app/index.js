// This file will be the main NodeJS entrypoint
//BEGIN_CHALLENGE

var 
  express = require('express'),
  app = express();
var
  accounts = [],
  login    = require('./login.js')
  register = require('./register.js')
  remove = require('./remove.js');
 
//middleware to populate req.body.
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json 
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/api/accounts/login', login.handle);
app.post('/api/accounts/register', register.handle);
app.post('/api/accounts/disable', remove.handle);

exports.findAccount = function (username) {
  for (var i = 0; i < accounts.length; i++) {
    if (accounts[i].username === username)
      return accounts[i];
  }
  return false;
};

exports.pushAccount = function (user) {
  accounts.push(user);
};

exports.softDeleteAccount = function (username) {
  for (var i = 0; i < accounts.length; i++)
    if (accounts[i].username == username)
      accounts[i].deleted = true;
}

app.listen(8888, function() {
  console.log("Server running ...");
});

//END_CHALLENGE
