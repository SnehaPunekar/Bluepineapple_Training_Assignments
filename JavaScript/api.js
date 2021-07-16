const { complex , add, subtract, multiply, divide } =  require('mathjs');


function add_complex(){
    const a = complex(1,2);
    const b = complex(3,4);
    return add(a, b)  
}

function sub_complex(){
    const a = complex(1,2);
    const b = complex(3,4);
    return subtract(a, b)  
}
function multiply_complex(){
    const a = complex(1,2);
    const b = complex(3,4);
    return multiply(a, b)  
}
function divide_complex(){
    const a = complex(1,2);
    const b = complex(3,4);
    return divide(a, b)  
}
 
module.exports = {add_complex,sub_complex,multiply_complex,divide_complex};
