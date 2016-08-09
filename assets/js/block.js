$(document).ready(function(){


  $(".flex-nav").hide();
  $(".flex-large").hide();
  $("#nav-detail").hide();

/*
  $("#title-bar").hover(function () {
      $("#nav-bar").attr("src", "img/navbar_r.png");
  }, function () {
      $("#nav-bar").attr("src", "img/navbar_b.png");
  });*/

  $("#1").hover(function () {
      $("#hr").attr("src", "img/hr_r.png");
  }, function () {
      $("#hr").attr("src", "img/hr_b.png");
  });

  $("#2").hover(function () {
      $("#pr").attr("src", "img/pr_r.png");
  }, function () {
      $("#pr").attr("src", "img/pr_b.png");
  });

  $("#3").hover(function () {
      $("#curating").attr("src", "img/curating_r.png");
  }, function () {
      $("#curating").attr("src", "img/curating_b.png");
  });

  $("#4").hover(function () {
      $("#design").attr("src", "img/design_r.png");
  }, function () {
      $("#design").attr("src", "img/design_b.png");
  });

  $("#5").hover(function () {
      $("#finance").attr("src", "img/finance_r.png");
  }, function () {
      $("#finance").attr("src", "img/finance_b.png");
  });

  $("#6").hover(function () {
      $("#it").attr("src", "img/it_r.png");
  }, function () {
      $("#it").attr("src", "img/it_b.png");
  });

  $("#7").hover(function () {
      $("#market").attr("src", "img/market_r.png");
  }, function () {
      $("#market").attr("src", "img/market_b.png");
  });

  $("#8").hover(function () {
      $("#photo").attr("src", "img/photo_r.png");
  }, function () {
      $("#photo").attr("src", "img/photo_b.png");
  });

  $("#9").hover(function () {
      $("#sd").attr("src", "img/sd_r.png");
  }, function () {
      $("#sd").attr("src", "img/sd_b.png");
  });

  $("#10").hover(function () {
      $("#join").attr("src", "img/join_r.png");
  }, function () {
      $("#join").attr("src", "img/join_b.png");
  });

  var prev = "#_0";

  $("#title-bar").click(function(){
    $("#nav-bar").hide();
    $("#nav-detail").show();



  });

  $("#1").click(function(){

    if(prev!="#_1"){
      $(prev).hide("fast");
      $("#_1").show(1000);
      prev="#_1";
    }
  });


  $("#2").click(function(){
    if(prev!="#_2"){
      $(prev).hide("fast");
      $("#_2").show(1000);
      prev="#_2";
    }
  });

  $("#3").click(function(){
    if(prev!="#_3"){
      $(prev).hide("fast");
      $("#_3").show(1000);
      prev="#_3";
    }
  });

  $("#4").click(function(){
    if(prev!="#_4"){
      $(prev).hide("fast");
      $("#_4").show(1000);
      prev="#_4";
    }
  });

  $("#5").click(function(){
    if(prev!="#_5"){
      $(prev).hide("fast");
      $("#_5").show(1000);
      prev="#_5";
    }
  });

  $("#6").click(function(){
    if(prev!="#_6"){
      $(prev).hide("fast");
      $("#_6").show(1000);
      prev="#_6";
    }
  });

  $("#7").click(function(){
    if(prev!="#_7"){
      $(prev).hide("fast");
      $("#_7").show(1000);
      prev="#_7";
    }
  });

  $("#8").click(function(){
    if(prev!="#_8"){
      $(prev).hide("fast");
      $("#_8").show(1000);
      prev="#_8";
    }
  });

  $("#9").click(function(){
    if(prev!="#_9"){
      $(prev).hide("fast");
      $("#_9").show(1000);
      prev="#_9";
    }
  });

  $("#10").click(function(){
    if(prev!="#_10"){
      $(prev).hide("fast");
      $("#_10").show(1000);
      prev="#_10";
    }
  });

  $(".flex-nav").click(function(){
    $(".flex-nav").hide();
  });



  /*$(".flex-item").mouseleave(function(){
    $(".flex-nav").hide();
  });*/
});
