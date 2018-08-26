document.getElementById("green").onclick = green

document.getElementById("blue").onclick = blue

document.getElementById("purple").onclick = purple

document.getElementById("gold").onclick = gold

document.getElementById("start").onclick = startgame
// create a list of values we will be pulling from
var powerLevel = []
// creat an array of 1-50
for (var i = 1; i <= 50; i++) {
    powerLevel.push(i);
}
var goalList = Math.floor(Math.random() * 500) + 150
//creat a number as the goal between 500 and 150
var engrams = [{}, {}, {}, {}];
// create a list of objects that will be used to store our engrams data
var score = []
function startgame() {
    // get a random number for each one of the engrams
    score = [];
    for (let index = 0; index < engrams.length; index++) {
        // reference the current engram
        const engram = engrams[index];
        // get a random number that is between 0 and the length of the powerLevel array
        var randomIndex = Math.floor(Math.random() * powerLevel.length);
        // grab a randomIndex that we just got from the powerLevel array
        var randomNumber = powerLevel[randomIndex];
        // take the number we just used out of the powerLevel array
        powerLevel.splice(randomIndex, 1);
        // assign the current engram the value that we grabbed on line 27
        engram.value = randomNumber;
        // console log the engram to see that the random number was assigned.
        console.log(engram);
    }
    document.getElementById("goalNum").innerHTML = goalList
    console.log(score)

}

if (score === goalList) {
    alert("You were successful!!! Now go hunt me down some Fallen scum on Titan!")

}
else if (score >= goalList) {
    $("#green").hide()
    $("#blue").hide()
    $("#purple").hide()
    $("#gold").hide()
    alert("oh no!!! Your gear seems to have disintegrated from too much power")
}
else {

}

function green() {
    //assign this engram the vale of engrams[0]
    var greenEngram = engrams[0];
    if (score.length === 0) {
        var newScore = greenEngram.value
        score.push(newScore);
        document.getElementById("scoreNum").innerHTML = score

        console.log(score);
        console.log(greenEngram)
    }
    else {
        var addScore = +greenEngram.value + +score
        score.pop()
        score.push(addScore);
        document.getElementById("scoreNum").innerHTML = score
        console.log(score);

    }
    if (score === goalList) {
        alert("You were successful!!! Now go hunt me down some Fallen scum on Titan!")
    
    }
    else if (score >= goalList) {
        $("#green").hide()
        $("#blue").hide()
        $("#purple").hide()
        $("#gold").hide()
        alert("oh no!!! Your gear seems to have disintegrated from too much power")
    }
    else {
    
    }


}
function blue() {
    //assign this engram the vale of engrams[1]
    var blueEngram = engrams[1];
    if (score.length === 0) {
        var newScore = blueEngram.value
        score.push(newScore);
        document.getElementById("scoreNum").innerHTML = score

        console.log(score);
        console.log(blueEngram)
    }
    else {
        var addScore = +blueEngram.value + +score
        score.pop()
        score.push(addScore);
        document.getElementById("scoreNum").innerHTML = score
        console.log(score);

    }
    if (score === goalList) {
        alert("You were successful!!! Now go hunt me down some Fallen scum on Titan!")
    
    }
    else if (score >= goalList) {
        $("#green").hide()
        $("#blue").hide()
        $("#purple").hide()
        $("#gold").hide()
        alert("oh no!!! Your gear seems to have disintegrated from too much power")
    }
    else {
    
    }


}
function purple() {
    //assign this engram the vale of engrams[3]
    var purpleEngram = engrams[2];
    if (score.length === 0) {
        var newScore = purpleEngram.value
        score.push(newScore);
        document.getElementById("scoreNum").innerHTML = score

        console.log(score);
        console.log(purpleEngram)
    }
    else {
        var addScore = +purpleEngram.value + +score
        score.pop()
        score.push(addScore);
        document.getElementById("scoreNum").innerHTML = score
        console.log(score);

    }
    if (score === goalList) {
        alert("You were successful!!! Now go hunt me down some Fallen scum on Titan!")
    
    }
    else if (score >= goalList) {
        $("#green").hide()
        $("#blue").hide()
        $("#purple").hide()
        $("#gold").hide()
        alert("oh no!!! Your gear seems to have disintegrated from too much power")
    }
    else {
    
    }

    // console.log(purpleEngram)

}
function gold() {
    //assign this engram the vale of engrams[2]
    var goldEngram = engrams[3];
    if (score.length === 0) {
        var newScore = goldEngram.value
        score.push(newScore);
        document.getElementById("scoreNum").innerHTML = score
        console.log(score);
        console.log(goldEngram)
    }
    else {
        var addScore = +goldEngram.value + +score
        score.pop()
        score.push(addScore);
        document.getElementById("scoreNum").innerHTML = score
        console.log(score);

    }
    if (score === goalList) {
        alert("You were successful!!! Now go hunt me down some Fallen scum on Titan!")
    
    }
    else if (score >= goalList++) {
        $("#green").hide()
        $("#blue").hide()
        $("#purple").hide()
        $("#gold").hide()
        alert("oh no!!! Your gear seems to have disintegrated from too much power")
    }
    else {
    
    }

    //console.log(goldEngram)

}
