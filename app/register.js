// You can use this file for Step1
//BEGIN_CHALLENGE
var index = require('./index.js');

exports.handle = function (req, res, next) {
    var data = req.params;

    if (data.password.length < 6 || data.email == 'invalid') {
        res.send({
            'username': data.username,
            'result': false,
            'reason': 'Something went wrong'
        });
        return next();
    }

    if (index.findAccount(data.username)) {
        res.send({
            'username': data.username,
            'result': false,
            'reason': 'Account already exists'
        });
        return next();
    }

    index.pushAccount({
        'username': data.username,
        'password': data.password,
        'email': data.email,
        'deleted': false
    });

    res.send({
        'username': data.username,
        'result': true
    });
    return next();
};
//END_CHALLENGE