import mongoose from 'mongoose';

export default () => {
  const connect = () => {
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }
    mongoose.connect(
      process.env.MONGO_URL,
      {
        useFindAndModify: false,
        useNewUrlParser: true
      },
      e => {
        if (e) {
          console.error('몽고디비 연결 에러났다 창회야: ', e);
        } else {
          console.log('몽고디비 연결 됐다 창회야');
        }
      }
    );
  };
  connect();

  mongoose.connection.on('error', e => {
    console.error('몽고디비 작업 중 에러났다 창회야: ', e);
  });

  mongoose.connection.on('disconnected', () => {
    console.error('창회야 몽고디비 연결 끊어졌는데 다시 연결해볼게');
    connect();
  });

  require('./room');
};
