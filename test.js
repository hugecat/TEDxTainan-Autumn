$(document).ready(function(){
  $(".flex-large").hide();

  $("#1").mouseenter(function(){
    $(".flex-item").css("flex-direction","column");
    $("#1").css("height","300px");
    $("#6").hide("fast");
    $("#7").hide("fast");
  });

  $(".flex-item").click(function(){
    $(".flex-large").show(1000);

  });

  $(".flex-item").mouseleave(function(){
    $(".flex-large").hide(1000);
  });
});
