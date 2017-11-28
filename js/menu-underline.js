//document.addEventListener("DOMContentLoaded", function() {
// $(document).ready(function() {
window.onload=function(){

		var active = document.querySelector('li.active')
		var activePos = active.getAttribute('id');
		var activeWidth = window.getComputedStyle(active, null).getPropertyValue("width");

//		var activeLiwidth = window.getComputedStyle(li1o, null).getPropertyValue("width");

		var li1o = document.getElementById("li1");
    var li1 = window.getComputedStyle(li1o, null).getPropertyValue("width");

    var li2o = document.getElementById("li2");
    var li2 = window.getComputedStyle(li2o, null).getPropertyValue("width");

    var li3o = document.getElementById("li3");
    var li3 = window.getComputedStyle(li3o, null).getPropertyValue("width");

    var li4o = document.getElementById("li4");
    var li4 = window.getComputedStyle(li4o, null).getPropertyValue("width");

    var li5o = document.getElementById("li5");
    var li5 = window.getComputedStyle(li5o, null).getPropertyValue("width");

    var li6o = document.getElementById("li6");
    var li6 = window.getComputedStyle(li6o, null).getPropertyValue("width");

    var clicked1 = "calc(" + initialPosition() + ")"
    var clicked2 = "calc( " + activeWidth + ")";
    $(".hrstalk").css({
      marginLeft: "calc(" + initialPosition() + ")",
      width: "calc( " + activeWidth + ")"
    });

	function initialPosition(){
		switch(activePos)
				{
			case 'li1':
				return '0px';
			case 'li2':
				return `${li1}`;
			case 'li3':
				return `${li1} + ${li2}`;
			case 'li4':
				return `${li1} + ${li2} + ${li3}`;
			case 'li5':
				return `${li1} + ${li2} + ${li3} + ${li4}`;
			case 'li6':
				return `${li1} + ${li2} + ${li3} + ${li4} + ${li5}`;
			default: return '0px';
				}
	}

$("#li1, #li2, #li3, #li4, #li5, #li6").mouseleave(function(){
    $(".hrstalk").css({
      marginLeft: clicked1,
      width: clicked2
    });
});
////////////////////
//underLine stalk
////////////////////
$("#li1").mouseenter(function(){
    $(".hrstalk").css({
      marginLeft: 0,
      width: "calc( " + li1 + ")"
    });
});
//next
$("#li2").mouseenter(function(){
    $(".hrstalk").css({
      marginLeft: "calc( " + li1 + ")",
      width: "calc( " + li2 + ")"
    });
});
//next
$("#li3").mouseenter(function(){
    $(".hrstalk").css({
      marginLeft: "calc( " + li2 + " + " + li1 + ")",
      width: "calc( " + li3 + ")"
    });
});
//next
$("#li4").mouseenter(function(){
    $(".hrstalk").css({
      marginLeft: "calc( " + li1 + " + " + li2 + " + " + li3 + ")",
      width: "calc( " + li4 + ")"
    });
});
//next
$("#li5").mouseenter(function(){
    $(".hrstalk").css({
      marginLeft: "calc( " + li1 + " + " + li2 + " + " + li3 + " + " + li4 + ")",
      width: "calc( " + li5 + ")"
    });
});
//next
$("#li6").mouseenter(function(){
    $(".hrstalk").css({
      marginLeft: "calc( " + li1 + " + " + li2 + " + " + li3 + " + " + li4 + " + " + li5 + ")",
      width: "calc( " + li6 + ")"
    });
});


////////////////////
//click link
//////////////////////
//$(".li1").click(function(){
//  clicked1 = 0;
//  clicked2 = "calc( " + li1 + ")";
//});
////next
//$(".li2").click(function(){
//  clicked1 = "calc( " + li1 + ")";
//  clicked2 = "calc( " + li2 + ")";
//});
////next
//$(".li3").click(function(){
//  clicked1 = "calc( " + li2 + " + " + li1 + ")";
//  clicked2 = "calc( " + li3 + ")";
//});
////next
//$(".li4").click(function(){
//  clicked1 = "calc( " + li1 + " + " + li2 + " + " + li3 + ")";
//  clicked2 = "calc( " + li4 + ")";
//});
////next
//$(".li5").click(function(){
//  clicked1 = "calc( " + li1 + " + " + li2 + " + " + li3 + " + " + li4 + ")";
//  clicked2 = "calc( " + li5 + ")";
//});
////next
//$(".li6").click(function(){
//  clicked1 = "calc( " + li1 + " + " + li2 + " + " + li3 + " + " + li4 + " + " + li5 + ")";
//  clicked2 = "calc( " + li6 + ")";
//});
};
