//declares that game is able to start as soon as its loaded
$(document).ready(function() {
	
	var $randomNumber = $("#randomNumber");

//generate random number at the start of the game
$(document).ready(function(){
	var $randomNumber=Math.floor(Math.random() * 40) + 1;
	$('#result').html($randomNumber); 
	return false;
	});

//generate a number for each gem that when pressed gets 
//added to the total score variable
	
	var $Score =$("#score");
	var score = 0;
	var $redGem = $("#redGem");
	var $blueGem = $("#blueGem");
	var $yellowGem =$("#yellowGem");
	var $greenGem =$("#greenGem");
	
$(document).ready(function() {
	$("#redGem").mousedown(function() {
		$("#redGem").height(+200);
		$('#score').html(score + Math.floor(Math.random() * 20) + 1);
		return
		});
		$("#redGem").mouseup(function(){
			$("#redGem").height(+100);
	});
	});

$(document).ready(function() {
	$("#blueGem").mousedown(function() {
		$("#blueGem").height(+200);
		$('#score').html(score + Math.floor(Math.random() * 20) + 1);

		return
		});
		$("#blueGem").mouseup(function(){
			$("#blueGem").height(+100);
	});
	});

$(document).ready(function() {
	$("#yellowGem").mousedown(function() {
		$("#yellowGem").height(+200);
		$('#score').html(score + Math.floor(Math.random() * 20) + 1);
		return
		});
		$("#yellowGem").mouseup(function(){
			$("#yellowGem").height(+100);
	});
	});

$(document).ready(function() {
	$("#greenGem").mousedown(function() {
		$("#greenGem").height(+200);
		$('#score').html(score + Math.floor(Math.random() * 20) + 1);
		return
		});
		$("#greenGem").mouseup(function(){
			$("#greenGem").height(+100);
	});
	});
////generate a number for each gem that when pressed gets 
//added to the total score variable

	var $wins = $(0)
	var $losses = 0;

	$(document).ready(function(){

		if (score > $randomNumber){
			console.log("afdsdf");
			losses + 1;
		}
	})









	});












	//4 functions; each for individual gems


	//random number generater 

	//when clicked, each crystal will generate and display a
	//unique number added to the total score display box 




