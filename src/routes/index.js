const newsRouter = require('./news');
const toysRouter = require('./toys');
const siteRouter = require('./site');
const meRouter = require('./me');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/toys', toysRouter);
  app.use('/me', meRouter);
  app.use('/', siteRouter);
}

module.exports = route;
