function count_grains(){
	var n = document.getElementById("data").value;
	if(n>0 && n<65){
		var y = 2**(n-1);
		document.getElementById("res").innerHTML = "Number of Grains: " + y;
	}
	else{
		document.getElementById("res").innerHTML = "This box is not present on Chess Board!!";
	}
}