const shortBreak = 25;
const normalBreak = 50;
const longBreak = 90;
let clicked = 0;
//to find which button is pressed

$(".btn").click(function () {
    let value = this.id;
    startTimer(value);
});





function startTimer(key) {
    
    switch (key) {
        case "btn1":
            if(!clicked){
            start(shortBreak);
            $("#time").text(shortBreak + " : 00");
            clicked = 1;
            }
            break;

        case "btn2":
            if(!clicked){
            start(normalBreak);
            $("#time").text(normalBreak + " : 00");
            clicked = 1;
            }
            break;

        case "btn3":
            if(!clicked){
            start(longBreak);
            $("#time").text(longBreak + " : 00");
            clicked = 1;
            }
            break;

        case "btn4":
            if(!clicked){
            start(shortBreak);
            $("#time").text(shortBreak + " : 00");
            clicked = 1;
            }
            break;
        case "reset":
            $("#time").text(shortBreak + " : 00");
        default:
            break;
    }
}

function start(value) {
        Timer(value);
        playSound();
}

function Timer(amt) {
    let minutes = amt;
    let seconds = minutes * 60;
    setInterval(mytimer, 1000);
    function mytimer() {
        min = ((minutes % 91) < 10 ? "0" + (minutes % 91) : minutes % 91);
        sec = ((seconds % 60) < 10 ? "0" + (seconds % 60) : seconds % 60);
        let time = min + " : " + sec;
        if (sec % 60 === 0) {
            minutes--;
        }
        seconds--;
        $("#time").text(time);
    }

}

function playSound() {
    const audio = new Audio("sounds/fire.mp3");
    audio.play();
}


function toggle_dropdown() {
    $(".drop-list").toggle(".visible")
}