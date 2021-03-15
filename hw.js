var degree = 0;
$(function(){
$(window).resize(function(){
$("body").css("min-height", ($(window).height>0.666666667*$(window).width)?"100vh":"66.6666667vw");
}).resize();
})
//$(".body").height(screen.height>0.666666667*screen.width?"100vh":"66.6666667vw")
$(".right-down").click(function(){
	degree -= 90;
	$(this).animate({left:"73.242vw", top:"112.5vw"}, 1500, "swing");
	$(".right-down-2").animate({left:"72.917vw", top:"52.083245vw"}, 1500, "swing");
	$(".description").animate({left:"-79.62vw"}, 1500, "swing");
	$(".description-2").animate({left:"10.42vw"}, 1500, "swing");
	$(".figure").animate({rotate: degree}, 1500, "swing");
	$(".semi-circle-box").animate({rotate: degree}, 1500, "swing");
})
$(".right-down-2").click(function(){
	degree -= 90;	
	$(this).animate({left:"73.242vw", top:"112.5vw"}, 1500, "swing");
	$(".right-down").animate({left:"72.917vw", top:"52.083245vw"}, 1500, "swing");
	$(".description-2").animate({left:"-79.62vw"}, 1500, "swing");
	$(".description").animate({left:"10.42vw"}, 1500, "swing");
	$(".figure").animate({rotate: degree}, 1500, "swing");
	$(".semi-circle-box").animate({rotate: degree}, 1500, "swing");
})