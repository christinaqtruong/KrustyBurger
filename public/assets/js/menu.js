// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newDevour")
      var newDevouredState = {
        devoured: newDevour
      };
      
      console.log("Clicked devour burger")

      // Send the PUT request.
      $.ajax("/api/menu/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#addBurger").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      console.log("Clicked add burger")
      
      var newBurger = {
        selection: $("#newSelection").val().trim(),
        devoured: 0
      };
      
      console.log(newBurger);
      
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
  