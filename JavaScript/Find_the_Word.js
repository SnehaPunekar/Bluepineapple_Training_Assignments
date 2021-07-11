function find_frequency(){

let text = document.getElementById("demo").innerHTML.toString();

var newArr = text.split(' ');

var word = document.getElementById("res").value.toString();

var cnt = 0;

for(let i=0; i<=newArr.length;i++){
  if(newArr[i]===word){
    cnt++;
  }
}

if(cnt>0){
  document.getElementById("ans").innerHTML =`${word} occurs ${cnt} times.`;
  }
else
{
  document.getElementById("ans").innerHTML = `${word} not Found.`;
  }
}