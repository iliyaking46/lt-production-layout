//document.addEventListener("DOMContentLoaded", function() {
 $(document).ready(function() {
		var li1o = document.getElementsByClassName("li1")[0];
    var li1 = window.getComputedStyle(li1o, null).getPropertyValue("width");

    var li2o = document.getElementsByClassName("li2")[0];
    var li2 = window.getComputedStyle(li2o, null).getPropertyValue("width");

    var li3o = document.getElementsByClassName("li3")[0];
    var li3 = window.getComputedStyle(li3o, null).getPropertyValue("width");

    var li4o = document.getElementsByClassName("li4")[0];
    var li4 = window.getComputedStyle(li4o, null).getPropertyValue("width");

    var li5o = document.getElementsByClassName("li5")[0];
    var li5 = window.getComputedStyle(li5o, null).getPropertyValue("width");

    var li6o = document.getElementsByClassName("li6")[0];
    var li6 = window.getComputedStyle(li6o, null).getPropertyValue("width");

    var clicked1 = 0;
    var clicked2 = "calc(0px + " + li1 + ")";

    $(".hrstalk").css({
      marginLeft: "0",
      width: "calc( " + li1 + ")"
    });

$(".li1, .li2, .li3, .li4, .li5, .li6").mouseleave(function(){
    $(".hrstalk").css({
      marginLeft: clicked1,
      width: clicked2
    });
});
////////////////////
//underLine stalk
////////////////////
$(".li1").mouseenter(function(){
    $(".hrstalk").css({
      marginLeft: 0,
      width: "calc( " + li1 + ")"
    });
});
//next
$(".li2").mouseenter(function(){
    $(".hrstalk").css({
      marginLeft: "calc( " + li1 + ")",
      width: "calc( " + li2 + ")"
    });
});
//next
$(".li3").mouseenter(function(){
    $(".hrstalk").css({
      marginLeft: "calc( " + li2 + " + " + li1 + ")",
      width: "calc( " + li3 + ")"
    });
});
//next
$(".li4").mouseenter(function(){
    $(".hrstalk").css({
      marginLeft: "calc( " + li1 + " + " + li2 + " + " + li3 + ")",
      width: "calc( " + li4 + ")"
    });
});
//next
$(".li5").mouseenter(function(){
    $(".hrstalk").css({
      marginLeft: "calc( " + li1 + " + " + li2 + " + " + li3 + " + " + li4 + ")",
      width: "calc( " + li5 + ")"
    });
});
//next
$(".li6").mouseenter(function(){
    $(".hrstalk").css({
      marginLeft: "calc( " + li1 + " + " + li2 + " + " + li3 + " + " + li4 + " + " + li5 + ")",
      width: "calc( " + li6 + ")"
    });
});


////////////////////
//click link
////////////////////
$(".li1").click(function(){
  clicked1 = 0;
  clicked2 = "calc( " + li1 + ")";
});
//next
$(".li2").click(function(){
  clicked1 = "calc( " + li1 + ")";
  clicked2 = "calc( " + li2 + ")";
});
//next
$(".li3").click(function(){
  clicked1 = "calc( " + li2 + " + " + li1 + ")";
  clicked2 = "calc( " + li3 + ")";
});
//next
$(".li4").click(function(){
  clicked1 = "calc( " + li1 + " + " + li2 + " + " + li3 + ")";
  clicked2 = "calc( " + li4 + ")";
});
//next
$(".li5").click(function(){
  clicked1 = "calc( " + li1 + " + " + li2 + " + " + li3 + " + " + li4 + ")";
  clicked2 = "calc( " + li5 + ")";
});
//next
$(".li6").click(function(){
  clicked1 = "calc( " + li1 + " + " + li2 + " + " + li3 + " + " + li4 + " + " + li5 + ")";
  clicked2 = "calc( " + li6 + ")";
});
});
