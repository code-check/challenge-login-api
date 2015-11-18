// You can use this file for Step3
//BEGIN_CHALLENGE

var index = require('./index.js');

exports.handle = function (req, res, next) {
  var
    data = req.body,
    user = index.findAccount(data.token);

  if (!user) {
    res.sendStatus(401);
  }
  else {
    index.softDeleteAccount(user.username)
    res.status(200).send({});
  }
  return next();
};

//END_CHALLENGE
