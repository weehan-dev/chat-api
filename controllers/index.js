import Http from 'http-status-codes';

export const index = (req, res, next) => {
  res.status(Http.ACCEPTED).json('Hello World');
};

export const matchUser = (req, res, next) => {};
