const ObjectId = require('mongodb').ObjectID;

const rootUser = require('./services/rootUser')();

const to = function to(promise) {
  return promise.then(result => [null, result]).catch(err => [err, null])
}

function ifEmptyCreate(name, data) {

  return async () => {
    console.log("-----------------------Here", name, data)
    try {
      let [err, found] = await to(this.service(name).find({ query: {} }));
      if (!err) {

        if (found && Number.isInteger(found.total) && Array.isArray(found.data)) {
          found = found.data
        }
        console.log("-----------------------found", found)
        if (found.length !== 0) { return false }

        let [err] = await to(this.service(name).create(data))

        if (!err) {
        } else {
          logger.error("error while seeding", err)
        }
      } else {
        logger.error("error while finding collection before seeding", err)
      }
    } catch (err) {
      console.log("err", err)
    }
  }
}

module.exports = function () {
  const app = this

  ifEmptyCreate = ifEmptyCreate.bind(this)
  console.log("-----------------------Here")
  app.configure(ifEmptyCreate('users', rootUser));
}

