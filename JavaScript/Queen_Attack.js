function if_attack(){

var col1 = document.getElementById("R1").value;
var row1 = document.getElementById("I1").value;
var col2 = document.getElementById("R2").value;
var row2 = document.getElementById("I2").value;

console.log(col1);
console.log(row1);
console.log(col2);
console.log(row2);

if(row1==row2){
	console.log("Queens can attack each-other.");
}
else if(col1==col2){
	console.log("Queens can attack each-other.");
}
else if(Math.abs(row1 - row2) == Math.abs(col1 - col2)){
	console.log("Queens can attack each-other.");
}
else{
	console.log("Queens CANNOT attack each-other.");
}
}