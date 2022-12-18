function playCraps() {
    console.log("playCraps() started");

    var die1 = 0;
    var die2 = 0;

    die1 = Math.ceil(6 * Math.random()) + 1;
    die2 = Math.ceil(6 * Math.random()) + 1;

    console.log(die1);
    console.log(die2);

    document.getElementById("die1Res").innerHTML = "The result for die1 is: " + die1;
    document.getElementById("die2Res").innerHTML = "The result for die2 is: " + die2;



    var sum = die1 + die2;
    if (sum == 7 || sum == 11) {
        console.log("you lose!!");
        document.getElementById("gameRes").innerHTML = "You did find victory. Please okay again and WIN!";

    } else if (die1 % 2 == 0 && die1 == die2) {
        console.log("you win!!");
        document.getElementById("gameRes").innerHTML = "you won!!";

    } else {
        console.log("You did not win or lose");
        document.getElementById("gameRes").innerHTML = "You did not win or lose. Please play again to WIN!";
    }
}

function playStation(){
    console.log("playStation() started");
    mySound = new sound("MarioGalaxy.mp3");
    mySound.play();
}

function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "notes");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }   
}       
