var bands= require("./bands.js");

var bandList = bands.myBands;
var bands.basic;

for (var key in bandList){
		console.log("A" + key + "band is" + bandList[key] + )
}

console.log('----------------');
console.log('bands');
console.log('classics');



// Exports is essentially an object that we can add data or variables to
// We can access them from other files using the 'require' keyword.

// exports.essentials = {
//   drink: "water",
//   eat: "snickers",
//   fun: "phone",
//   friend: "facebook"
// };

// exports.nicetohaves = {
//   tools: ["can opener", "flashlight", "matches"],
//   safety: ["first aid kit", "gloves"]
// };

// var privateAsF = {
//   cookware: "wafflemaker"
// };

// // Using the require keyword lets us access all of the exports
// // in our ess.js file
// var stuffINeed = require("../ess.js");

// // This will print everything in exports.
// console.log("--------------------------");
// console.log("ALL THE STUFF I NEED");
// console.log(stuffINeed);
// console.log("--------------------------");

// // These will print correctly because we imported them
// console.log("Essentials");
// console.log(stuffINeed.essentials.fun);
// console.log("--------------------------");
// console.log("Nice to Haves");
// console.log(stuffINeed.nicetohaves);

// // This won't print anything because it wasn't exported in ess.js
// console.log("--------------------------");
// console.log("Nonessentials");
// console.log(stuffINeed.nonessentials);