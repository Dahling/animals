$(document).ready(function() {


  $("form#animals").submit(function(event) {
    var animal = $("input:radio[name=animal]:checked").val();
     if (animal === "ladybugs") {
        $('.ladybugs').show();
        $('.turtle').hide();
        $('.spiders').hide();
      } else if (animal === "turtle") {
        $('.ladybugs').hide();
        $('.turtle').show();
        $('.spiders').hide();
      } else {
        $('.ladybugs').hide();
        $('.turtle').hide();
        $('.spiders').show();
      }


  event.preventDefault();
  });

});
