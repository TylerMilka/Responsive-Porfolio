var headsCount= 0;	
var	tails = 0;
var wins =0;
var losses =0

$('#heads').on('click', function() {
	headsCount++; //headsCount = headsCount +1
$('#headsChosen').html(headsCount);

$('#guess').html('<b>Heads</b>');
flipThatCoin(0);
});


$('#tails').on('click', function() {
	tailsCount++; //tailCount =tailCount +1
$('#tailsChosen').html(tailsCount);

$('#guess').html('<b>Heads</b>');
flipThatCoin(0);
});


function flipThatCoin (result) {

	var randomNumber =Math.round(Math.random());

	if (randomNumber ===0){
		$('#')
	}

}