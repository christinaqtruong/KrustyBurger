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
  burger.insertOne(["selection"],[req.body.selection], function(result) {
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

// Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {

//   $(".create-form").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var newQuote = {
//       author: $("#auth").val().trim(),
//       quote: $("#quo").val().trim()
//     };

//     // Send the POST request.
//     $.ajax("/api/quotes", {
//       type: "POST",
//       data: newQuote
//     }).then(
//       function() {
//         console.log("created new quote");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $(".devour").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var devoured = {
//       devoured: true,
//     };

//     var id = $(this).data("id");

//     // Send the POST request.
//     $.ajax("/api/menu/", {
//       type: "PUT",
//       data: devoured
//     }).then(
//       function() {
//         console.log("updated burger status");
//         // Reload the page to get the updated list
//         location.assign("/");
//       }
//     );
//   });
// });


