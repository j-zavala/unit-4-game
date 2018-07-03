// Variable declaration
let random; //random number (b/w 19 to 120 inclusive)
let total = 0; //the sum so far
let current_num; //the number recently clicked
let last_num; //last number clicked
let red; //random number for red crystal
let yellow; //random number for yellow crystal
let blue; //random number for blue crystal
let green; //random number for green crystal


// Functions
const onClick = () => {
   checkIf();
};

const checkIf = () => {
reset();
};

const reset = () => {
    alert("you just clicked me!");
   
};

$(document).ready(function() {
    $("#img-red").on("click", onClick);

});