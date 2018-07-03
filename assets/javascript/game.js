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
    if (total === 0 || total < pick) {
        total = total + yellow;
        $("#total").text(total);
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

const blueClick = () => {
    if (total === 0 || total < pick) {
        total = total + blue;
        $("#total").text(total);
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

const greenClick = () => {
    if (total === 0 || total < pick) {
        total = total + green;
        $("#total").text(total);
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

const reset = () => {
    total = 0;
    pick = chance.integer({ min: 19, max: 120 });
    $(".random").text(pick);
    red = chance.integer({ min: 1, max: 12 });
    yellow = chance.integer({ min: 1, max: 12 });
    blue = chance.integer({ min: 1, max: 12 });
    green = chance.integer({ min: 1, max: 12 });
};
//When user clicks on crystal, do the following...
$("#img-red").on("click", redClick);
$("#img-yellow").on("click", yellowClick);
$("#img-blue").on("click", blueClick);
$("#img-green").on("click", greenClick);

$(".random").text(pick);
$("#wins").text("Wins: " +  0);
$("#losses").text("Losses: " +  0);
});