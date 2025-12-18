const async = require("async");

async.parallel([
  function (callback) {
    setTimeout(function () {
      console.log("create array one");
      callback(null, "first task are completed");
    }, 1000);
  },
  function (callback) {
    setTimeout(function () {
      console.log("create array two");
      callback(null, "second task are completed");
    }, 2000);
  },
]),
  function (err, results) {
    if (err) {
      console.log("error occur" + err);
    } else {
      console.log("all condition are run successfully");
    }
  };
async.parallel({
  task1: function (callback) {
    setTimeout(function () {
      console.log("create object one");
      callback(null, "first task are completed");
    }, 1000);
  },
  task2: function (callback) {
    setTimeout(function () {
      console.log("create object two");
      callback(null, "second task are completed");
    }, 2000);
  },
}),
  function (err, results) {
    if (err) {
      console.log("error occur" + err);
    } else {
      console.log("all condition are run successfully");
    }
  };
