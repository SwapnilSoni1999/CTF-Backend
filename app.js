const express = require('express');
require('dotenv').config({ path: './config/.env' });
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connectDatabase = require('./config/database');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const questionsRouter = require('./routes/questions');
const app = express();
connectDatabase();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/questions', questionsRouter);

module.exports = app;
