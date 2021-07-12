function shift_cypher(){

var str = document.getElementById("inp").value;

var num = document.getElementById("n").value;

document.getElementById("demo").innerHTML = "Encrypted text is :" + Shift_Cypher(str,num);
}


function Shift_Cypher (str, num) {
  if (num < 0) {
    return caesarShift(str, num + 26);
  }
  var output = "";

  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    if (c.match(/[a-z]/i)) {
      var code = str.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + num) % 26) + 65);
      }

      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + num) % 26) + 97);
      }
    }

    output += c;
  }

  return output;
}