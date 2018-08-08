$(document).ready(function() {
  $("#infos").submit(function(event)  {
  console.log ("IT WORKS");
  var personInput = $("input#person").val();
  var reasonInput = $("input#reason").val();
  var dateInput = $("input#date").val();
  var stedInput = $("input#sted").val();


    $(".person").text(personInput);
    $(".reason").text(reasonInput);
    $(".date").text(dateInput);
    $(".sted").text(stedInput);

    $("#success").show();
    alert("Success!");


    event.preventDefault();

  });
});
