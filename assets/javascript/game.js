$(document).ready(function() {


// Variable declaration
let total = 0; //the sum so far
let current_num; //the number recently clicked
let last_num; //last number clicked
let pick = chance.integer({ min: 19, max: 120 });
let red = chance.integer({ min: 1, max: 12 });
let yellow = chance.integer({ min: 1, max: 12 });
let blue = chance.integer({ min: 1, max: 12 }); 
let green = chance.integer({ min: 1, max: 12 });
let wins = 0;
let losses = 0;


// Functions
const redClick = () => {
    if (total === 0 || total < pick) {
        total = total + red;
        $("#total").text(total);
        // console.log("Red: ", red);
        // console.log("Total: ", total);
    }
    else if (total === pick)
    {
        wins++;
        $("#wins").text("Wins: " +  wins);
        reset();
    }
    else if (total > pick)
    {
        losses++;
        $("#losses").text("Losses: " +  losses);
        reset();
    }
};

const yellowClick = () => {
};

const blueClick = () => {
};

const greenClick = () => {
};

const reset = () => {
    total = 0;
    pick = chance.integer({ min: 19, max: 120 });
    $(".random").text(pick);
    red = chance.integer({ min: 1, max: 12 });
};
//When user clicks on crystal, do the following...
$("#img-red").on("click", redClick);
$(".random").text(pick);
$("#wins").text("Wins: " +  0);
$("#losses").text("Losses: " +  0);
});