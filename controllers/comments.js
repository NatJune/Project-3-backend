var Comment = require('../models/comment');

module.exports = {
    index,
    create,
    update,
    delete: deleteComment,
};


function index(req, res) {
    Comment.find({}, function (err, comments) {
        res.status(200).json(comments);
    });
}

function create(req, res) {
    Comment.create(req.body, function (err, comments) {
        res.status(201).json(comments);
    });
}

function update(req, res) {
    Comment.findByIdAndUpdate(req.params.id, req.body, function () {
        index(req, res);
    });
}

function deleteComment(req, res) {
    Comment.findByIdAndDelete(req.params.id, function() {
        index(req, res);
    });
}