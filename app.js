var express = require('express');
var logger = require('morgan');
var cors = require('cors');

var commentsRouter = require('./routes/comment');
var usersRouter = require('./routes/user')

var app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json()); 
app.use(cors());

app.use('/api/comments', commentsRouter);
app.use('/api/users', usersRouter);


module.exports = app;
