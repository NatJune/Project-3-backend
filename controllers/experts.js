var Expert = require('../models/expert');

module.exports = {
    index,
    create,
    update,
    delete: deleteExpert,
};


function index(req, res) {
    Expert.find({uid: req.user.uid }, function (err, experts) {
        res.status(200).json(experts);
    });
}

function create(req, res) {
    Expert.create(req.body, function (err, expert) {
        res.status(201).json(expert);
    });
}

function update(req, res) {
   Expert.findByIdAndUpdate(req.params.id, req.body, function () {
        index(req, res);
    });
}

function deleteExpert(req, res) {
   Expert.findByIdAndDelete(req.params.id, function() {
        index(req, res);
    });
}
