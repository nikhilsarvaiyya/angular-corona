const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);
const logger = require('./logger');

module.exports = function (app) {
  mongoose.connect(
    app.get('mongodb'),
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      poolSize: 10,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
  ).catch(err => {
    logger.error(err);
    process.exit(1);
  });

  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
