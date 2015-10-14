// You can use this file for Step1
//BEGIN_CHALLENGE
var index = require('./index.js');

exports.handle = function (req, res, next) {
    var
        data = req.params,
        user = index.findAccount(data.username);

    if (!user || user.password != data.password || user.deleted) {
        res.send({
            'result': false,
            'reason': 'Combination user and password is invalid'
        });
    }

    res.send({
        'token': data.username,
        'result': true
    });

    return next();
};
//END_CHALLENGE