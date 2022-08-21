const shortBreak = 25;
const normalBreak = 50;
const longBreak = 75;
let clicked = 0;
let curr = shortBreak;
let curr_brk = curr / 5;
const audio = new Audio("sounds/lofi.mp3");
let count = 0;
let p = 0;
let interval;

//to find which button is pressed

$(".btn").click(function () {
    let value = this.id;
    startTimer(value);
});




function startTimer(key) {

    switch (key) {
        case "btn1":
            curr = shortBreak;
            if (!clicked) {
                $("#time").text(shortBreak + " : 00");

            }
            if (clicked) {

                if (confirm("The timer is still running are you sure you want to switch") === true) {
                    clearInterval(interval);
                    Timer(curr);
                }
            }
            break;

        case "btn2":
            curr = normalBreak;
            if (!clicked) {
                $("#time").text(normalBreak + " : 00");

            }
            if (clicked) {

                if (confirm("The timer is still running are you sure you want to switch") == true) {
                    clearInterval(interval);
                    Timer(curr);
                }
            }
            break;

        case "btn3":
            curr = longBreak;
            if (!clicked) {
                $("#time").text(longBreak + " : 00");

            }
            if (clicked) {

                if (confirm("The timer is still running are you sure you want to switch") == true) {
                    clearInterval(interval);
                    Timer(curr);
                }
            }
            break;

        case "btn4":
            if (!clicked) {
                start(curr);
                $("#time").text(curr + " : 00");
            }
            clicked = 1;
            break;
        case "reset":
            $("#time").text(shortBreak + " : 00");
        default:
            break;
    }
}

function start(value) {
    Timer(value);
    audio.play();
}

function brk() {
    alert("You've done it Time to take a break now :D");
    count = 1;
    Timer(curr_brk);
}

function Timer(amt) {

    let minutes = amt;
    let seconds = minutes * 60;
    interval = setInterval(mytimer, 1000);
    function mytimer() {
        min = minutes < 10 ? "0" + minutes : minutes;
        sec = ((seconds % 60) < 10 ? "0" + (seconds % 60) : seconds % 60);
        let time = min + " : " + sec;
        if (sec % 60 === 0) {
            minutes--;
        }
        seconds--;

        $("#time").text(time);

        if (seconds == 0) {
            clearInterval(interval);
            audio.pause();
            count === 0 ? brk() : reset();
        }

    }
}

function reset() {
    audio.pause();
    $("#time").text(curr + " : 00");
}

function toggle_dropdown() {
    $(".drop-list").toggle(".visible");
}



function stop() {
    if (p) {
        audio.pause();
        alert("Timer paused 'Click OK to resume'")
    }
    audio.play();
    p = 1;
}