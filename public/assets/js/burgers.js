$(function() {
  //new burger button function
  $("#submit-btn").on("click", function() {
    event.preventDefault();

    var newBurger = {
      name: $("#name")
        .val()
        .trim()
    };

    $.ajax("api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("added new burger");
      location.reload();
    });
  });

  // delete burger button function
  $("#devour-btn").on("click", function() {
    event.preventDefault();

    var id = $(this).data("id");
    console.log(id);

    var newDevourState = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(function() {
      console.log("changed devoured to true" );
      location.reload();
    });
  });
});
