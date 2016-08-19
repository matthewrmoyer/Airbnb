$(document).ready(function(){


var arriveDates = [];


$( "#arrive-date" ).datepicker({
minDate: 0

});
$( "#depart-date" ).datepicker({
minDate: 1

});

$("#arrive-date").on("click", function(){
	$(".carousel-indicators").addClass("important-z-index");
});

$(".dropdown-item").on("click", function(){

console.log(arriveDates[arriveDates.length-1]);
  var guestAmount = ($(this).data("guest-amount"));
   $("#Guests").text(guestAmount + " Guests");

  
});



function carouselNormalize(){
	//create array of all carousel-item elements
	var carouselItemArray = $(".carousel-item");
	//create array of all carousel-item heights
	var heights = [];


	carouselItemArray.each(function(){
//dont return zero height values
		if ($(this).height()>0){
			//add all heights greater than 0 to heights array
		heights.push($(this).height());
	}

	});

//sort array lowest to highest
heights.sort(function(a,b){
	return a-b;
});

	//create variable equal to the shortest carousel item height
			var shortest = (heights[0]);
			//set all carousel item heights to the shortest height
$(".carousel-item").css("height", shortest);


}
//calls carouselNormalize when all images are loaded
$(window).on("load", carouselNormalize);



});