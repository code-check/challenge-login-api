
//BEGIN_CHALLENGE
var
    accounts = [],
    login = require('./login.js'),
    register = require('./register.js'),
    remove = require('./remove.js'),
    restify = require('restify'),
    server = restify.createServer();

server.use(restify.urlEncodedBodyParser());

server.post('/Account/Login', login.handle);
server.post('/Account/Register', register.handle);
server.post('/Account/Remove', remove.handle);

server.listen(8888);

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
//END_CHALLENGE