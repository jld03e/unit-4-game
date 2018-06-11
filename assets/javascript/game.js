$(document).ready(function() {

var thanosNumber = Math.floor(Math.random()*((120-19)+1)+19);
var timeGem = Math.floor(Math.random()* ((12-1)+1)+1);
var spaceGem = Math.floor(Math.random()* ((12-1)+1)+1);
var mindGem = Math.floor(Math.random()* ((12-1)+1)+1);
var soulGem = Math.floor(Math.random()* ((12-1)+1)+1);

var humanNumber = 0;
var winsCounter = 0;
var deathsCounter = 0;

$("#wins").text(winsCounter);
$("#deaths").text(deathsCounter);
$("#thanosNumber").text(thanosNumber);

function reset() {
    thanosNumber = Math.floor(Math.random()*((120-19)+1)+19);
    $("#thanosNumber").text(thanosNumber);
    timeGem = Math.floor(Math.random()* ((12-1)+1)+1);
    spaceGem = Math.floor(Math.random()* ((12-1)+1)+1);
    mindGem = Math.floor(Math.random()* ((12-1)+1)+1);
    humanNumber =0;
    $("#humanNumber").text(humanNumber);
    console.log('reset');
}

function wins() {
    alert("YOU LIVE.");
    winsCounter++;
    $("#wins").text(winsCounter);
    reset();
}

function deaths() {
    alert("THANOS PURGATORY FOR YOU.");
    deathsCounter++;
    $("#deaths").text(deathsCounter);
    reset();
}

$(".timeGem").on('click', function() {
    humanNumber = humanNumber + timeGem;
    $("#humanNumber").text(humanNumber)
    if (humanNumber == thanosNumber) {
        wins();
    } else if (humanNumber > thanosNumber){
        deaths();
    }
});

$(".spaceGem").on('click', function() {
    humanNumber = humanNumber + spaceGem;
    $("#humanNumber").text(humanNumber)
    if (humanNumber == thanosNumber) {
        wins();
    } else if (humanNumber > thanosNumber){
        deaths();
    };
});

$(".mindGem").on('click', function() {
    humanNumber = humanNumber + mindGem;
    $("#humanNumber").text(humanNumber)
    if (humanNumber == thanosNumber) {
        wins();
    } else if (humanNumber > thanosNumber){
        deaths();
    };
});

$(".soulGem").on('click', function() {
    humanNumber = humanNumber + soulGem;
    $("#humanNumber").text(humanNumber)
    if (humanNumber == thanosNumber) {
        wins();
    } else if (humanNumber > thanosNumber){
        deaths();
    };
});

});