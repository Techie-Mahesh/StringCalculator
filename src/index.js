const StringCalculator = require("./calculator");
 
const calculator = new StringCalculator();
 
console.log(calculator.add(""));
console.log(calculator.add("1"));
console.log(calculator.add("1,2"));
console.log(calculator.add("1,2,3"));
console.log(calculator.add("//;\n1;2;4")); // 6
