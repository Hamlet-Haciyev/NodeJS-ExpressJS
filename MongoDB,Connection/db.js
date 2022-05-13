const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectId;
const dbname = "crud_mongodb";
const url = "mongodb://0.0.0.0:27017";
const mongoOptions = { useNewUrlParser: true };

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017").then((res) => {
  console.log("connected to database");
  state.db = res.db(dbname);
});
const state = {
  db: null,
};

// const connect = (cb) => {
//   if (state.db) {
//     cb();
//   } else {
//     MongoClient.connect(url, mongoOptions, (err, client) => {
//       if (err) {
//         cb(err);
//       } else {
//         state.db = client.db(dbname);
//         cb();
//       }
//     });
//   }
// };

const getPrimaryKey = (_id) => {
  return ObjectID(_id);
};
const getDB = () => {
  return state.db;
};
module.exports = { getPrimaryKey, getDB };
