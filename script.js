output = document.querySelector('#Output');

clear = document.querySelector('#clear');
back = document.querySelector('#back');
percentage = document.querySelector('#percentage');
divide = document.querySelector('#divide');

seven = document.querySelector('#seven');
eight = document.querySelector('#eight');
nine = document.querySelector('#nine');
multiply = document.querySelector('#multiply');

four = document.querySelector('#four');
five = document.querySelector('#five');
six = document.querySelector('#six');
subtract = document.querySelector('#subtract');

one = document.querySelector('#one');
two = document.querySelector('#two');
three = document.querySelector('#three');
add = document.querySelector('#add');

double_zero = document.querySelector('#d_zero');
zero = document.querySelector('#zero');
dot = document.querySelector('#dot');
calculate = document.querySelector('#calculate');



function clr_scr(){
    output.value = "0";
}

function ones(){
    output.value += String(one.value); 
}

function twos(){
    output.value += String(two.value);
}

function threes(){
    output.value += String(three.value);
}

function fours(){
    output.value += String(four.value);
}

function fives(){
    output.value += String(five.value);
}

function sixs(){
    output.value += String(six.value);
}

function sevens(){
    output.value += String(seven.value);
}

function eights(){
    output.value += String(eight.value);
}

function nines(){
    output.value  += String(nine.value);
}

function double_zeros(){
    output.value += String(double_zero.value);
}

function zeros(){
    output.value += String(zero.value);
}

function dots(){
    output.value += dot.value;
}

function backs(){
    output.value = output.value.slice(0, -1);
}
// operators

function adds(){
    let count = output.value.length;
    if (output.value.charAt(count) != "+"){

        output.value += add.value;   
    }
}

function subtracts(){
    output.value += subtract.value;   
}

function multiplys(){
    output.value += "*";   
}

function divides(){
    output.value = output.value.concat("/");   
}

function percentages(){
    output.value += "%";
}


// calculate
function calcu(){
    let result = output.value;
    if (output.value.includes = "%"){
        result = result.replace("%", "*0.01");
    }
    output.value = eval(result);
}

console.log(output.value.length.charAt(1))