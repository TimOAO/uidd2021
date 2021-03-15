var degree = 0;
$(".right-down").click(function(){
	degree -= 90;
	$(this).animate({left:"73.242vw", top:"239.203vh"}, 1500, "swing");
	$(".right-down-2").animate({left:"72.917vw", top:"110.742vh"}, 1500, "swing");
	$(".description").animate({left:"-79.62vw"}, 1500, "swing");
	$(".description-2").animate({left:"10.42vw"}, 1500, "swing");
	$(".figure").animate({rotate: degree}, 1500, "swing");
	$(".semi-circle-box").animate({rotate: degree}, 1500, "swing");
})
$(".right-down-2").click(function(){
	degree -= 90;	
	$(this).animate({left:"73.242vw", top:"239.203vh"}, 1500, "swing");
	$(".right-down").animate({left:"72.917vw", top:"110.742vh"}, 1500, "swing");
	$(".description-2").animate({left:"-79.62vw"}, 1500, "swing");
	$(".description").animate({left:"10.42vw"}, 1500, "swing");
	$(".figure").animate({rotate: degree}, 1500, "swing");
	$(".semi-circle-box").animate({rotate: degree}, 1500, "swing");
})