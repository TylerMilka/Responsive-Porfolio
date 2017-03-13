// Write a command line node application that takes 
// in a number from the command line and finds the sum of all the multiples of 6 that are smaller 
// than it. (ex: input: 13... output: 6 + 12 = 18)

//take input value in the form of an integer
var inputNum = parseInt(process.argv[2]);
var sum = 0;

//go from 6 to the nmber. adding up 6 each time (to only get multiples of 6)
for (var i = 6; i <= inputNum; i += 6){

//each time add i to the sum 
  sum += i;

}

console.log(sum);


