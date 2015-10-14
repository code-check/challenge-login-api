
//BEGIN_CHALLENGE
var index = require('./index.js');

exports.handle = function (req, res, next) {
    var
        data = req.params,
        user = index.findAccount(data.token);

    if (!user) {
        res.send(401);
        return next();
    }

    index.softDeleteAccount(user.username)

    res.send(200, {});
    return next();
};
//END_CHALLENGE