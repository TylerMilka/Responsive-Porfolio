var operator = process.argv[2];
var num1 = parseFloat(process.argv[3]);
var num2 = parseFloat(process.argv[4]);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Bro! Use actual numbers! C'mon man!")
} else {
    switch (operator) {
        case "subtract":
            console.log(num1 - num2);
            break;
        case "add":
            console.log(num1 + num2);
            break;
        case "multiply":
            console.log(num1 * num2);
            break;
        case "divide":
            console.log(num1 / num2);
            break;
        case "remainder":
            console.log(num1 % num2);
            break;
        case "exponent":
            console.log(Math.pow(num1, num2));
            break;
        default:
            console.log("Yo, bro! Use a valid operator!");
    }
}
