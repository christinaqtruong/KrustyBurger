var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var results = {
      menu: data
    };
    console.log(results);
    res.render("index", results);
  });
});

router.post("/api/menu", function(req, res) {
  burger.insertOne(["selection", 0],[req.body.selection, req.body.devoured], function(result) {
    res.json({ selection: result.insertSelection });
  });
});

router.put("/api/menu/:selection", function(req, res) {
  var condition = "selection = " + req.params.selection;

  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;

