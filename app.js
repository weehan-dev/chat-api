import createError from 'http-errors';
import Http from 'http-status-codes';
import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import flash from 'connect-flash';
import logger from 'morgan';
import path from 'path';

require('dotenv').config();

import indexRouter from './routers';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    resave: false,
    secret: process.env.SECRET,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false
    }
  })
);
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use((req, res, next) => {
  next(createError(Http.NOT_FOUND));
});

app.use((err, req, res, next) => {
  res.status(err.status || Http.INTERNAL_SERVER_ERROR);
  res.json(err);
});

app.set('port', process.env.PORT || 8888);

app.listen(app.get('port'), () => {
  console.log(`서버가 ${app.get('port')} 포트에서 돌고 있다 창회야.`);
});
