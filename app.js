var express = require('express');
var logger = require('morgan');
var cors = require('cors');
var commentRouter = require('./routes/comment');
var expertRouter = require('./routes/expert')

var app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json()); 
app.use(cors());

app.use('/api/comments', commentRouter);
app.use('/api/experts', expertRouter);


module.exports = app;
