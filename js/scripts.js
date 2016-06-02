
$(function(){
  $("form").submit(function(event){
  
    event.preventDefault();

    var animal = $("#animal").val();
    if (animal === "turtles"){
      $(".turtles").show();
    } else if (animal === "snakes") {
      $(".snakes").show();
    } else if (animal === "insects") {
      $(".insects").show();
    } else {
      $(".error").show();
    }

  })
})
