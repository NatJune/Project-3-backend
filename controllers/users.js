var User = require('../models/user');

module.exports = {
    index,
    create,
    update,
    delete: deleteUser,
};


function index(req, res) {
    User.find({}, function (err, users) {
        res.status(200).json(users);
    });
}

function create(req, res) {
    User.create(req.body, function (err, user) {
        res.status(201).json(user);
    });
}

function update(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, function () {
        index(req, res);
    });
}

function deleteUser(req, res) {
    User.findByIdAndDelete(req.params.id, function() {
        index(req, res);
    });
}