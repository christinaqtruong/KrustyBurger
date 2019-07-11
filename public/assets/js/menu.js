// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
  
      var newDevouredState = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/menu/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to true");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".burgerForm").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        selection: $("#newSelection").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/menu", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new menu selection");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    
  });
  