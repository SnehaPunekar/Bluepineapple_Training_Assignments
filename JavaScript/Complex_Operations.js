function get_Values(){
var a_real = document.getElementById("R1").value;
var a_img = document.getElementById("I1").value;
var b_real = document.getElementById("R2").value;
var b_img = document.getElementById("I2").value;

add_complex(a_real,a_img,b_real,b_img);
subtract_complex(a_real,a_img,b_real,b_img);
multiply_complex(a_real,a_img,b_real,b_img);

}
function add_complex(a_real,a_img,b_real,b_img){
 console.log("Addition is: "+(parseInt(a_real)+parseInt(b_real)) + "+" + (parseInt(a_img)+parseInt(b_img)) + "i");
}

function subtract_complex(a_real,a_img,b_real,b_img){
 console.log("Subtraction is: "+(parseInt(a_real)-parseInt(b_real)) + "+" + (parseInt(a_img)-parseInt(b_img)) + "i");
}

function multiply_complex(a_real,a_img,b_real,b_img){
	console.log("Multiplication is: " + ((parseInt(a_real) * parseInt(b_real) - parseInt(a_img) * parseInt(b_img))) + "+" +
          (parseInt(a_real) * parseInt(b_img) + parseInt(a_img) * parseInt(b_real)) + "i");
}

