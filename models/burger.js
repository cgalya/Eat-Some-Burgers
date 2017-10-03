//Import ORM
var orm = require("../config/orm.js");

//Create burger object that will utilize functions from the ORM to interact with the database
var burger = {
  //Select all table entries
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  //Create a new table entry
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  //Update a table entry
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  // delete: function(condition, cb) {
  //   orm.delete("burgers", condition, function(res) {
  //     cb(res);
  //   });
  // }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;