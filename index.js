//necessary
const shortBreak = 25;
const normalBreak = 50;
const longBreak = 75;
const audio = new Audio("sounds/lofi.mp3");
const audio1 = new Audio("sounds/alarm.mp3");
//could have done better
let clicked = 0;
let curr = shortBreak;
let curr_brk = curr / 5;
let curr_time = 0;
let count = 0;
let first = 0;
let p = false;
let interval;

//to find which button is pressed

$(".btn").click(function () {
    let value = this.id;
    startTimer(value);
});



//swutch statement to perform different task according to different buttons 
function startTimer(key) {

    switch (key) {
        case "btn1":
            curr = shortBreak;
            if (!clicked) {
                $("#time").text(shortBreak + " : 00");

            }
            if (clicked) {
                if (p) {
                    if (confirm("The timer is still running are you sure you want to switch") === true) {
                        clearInterval(interval);
                        Timer(curr);
                    }
                }
            }
            break;

        case "btn2":
            curr = normalBreak;
            if (!clicked) {
                $("#time").text(normalBreak + " : 00");

            }
            if (clicked) {
                if (p) {
                    if (confirm("The timer is still running are you sure you want to switch") == true) {
                        clearInterval(interval);
                        Timer(curr);
                    }
                }
            }
            break;

        case "btn3":
            curr = longBreak;
            if (!clicked) {
                $("#time").text(longBreak + " : 00");

            }
            if (clicked) {
                if (p) {
                    if (confirm("The timer is still running are you sure you want to switch") == true) {
                        clearInterval(interval);
                        Timer(curr);
                    }
                }
            }
            break;

        case "btn4":
            if (!clicked) {
                Timer(curr);
                audio.play();
                $("#time").text(curr + " : 00");
                $("#btn4").text("Pause");
            }
            clicked = 1;
            break;
        case "reset":
            $("#time").text(shortBreak + " : 00");
        default:
            break;
    }
}


//break function
function brk() {
    audio1.play();
    setTimeout(() => {
        alert("You've done it Time to take a break now. \n stand up walk around a bit.🙂");
    }, 3000);

    count = 1;
    Timer(curr_brk);
}


//the holy grain of this project THE TIMER
function Timer(amt) {

    let minutes = amt;
    let seconds = minutes * 60;
    interval = setInterval(mytimer, 1000);
    function mytimer() {
        let m = Math.floor(seconds / 60);
        min = (m) < 10 ? "0" + (m) : (m);
        sec = ((seconds % 60) < 10 ? "0" + (seconds % 60) : seconds % 60);
        let time = min + " : " + sec;
        curr_time = seconds;
        if (sec % 60 === 0) {
            minutes--;
        }
        seconds--;

        $("#time").text(time);
        $("title").text(time + "- Pomodoro");

        if (seconds == 0) {
            clearInterval(interval);
            audio.pause();
            count === 0 ? brk() : reset();
        }

    }
}

//after the break function
function reset() {
    audio.pause();
    $("#time").text(curr + " : 00");
    $("title").text(curr + " : 00" + "- Pomodoro");
    $("#btn4").text("Start");
}




//the play and pause button
function stop() {
    if (first) {
        if (p) {
            clearInterval(interval);

            audio.pause();

            $("#btn4").text("Start");
        }

        else if (!p) {
            audio.play();
            Timer((curr_time / 60));
            $("#btn4").text("Pause");
        }
    }
    first = 1;
    (p === true) ? (p = false) : (p = true);
}


//the dropdown
function toggle_dropdown() {
    $(".drop-list").toggle(".visible");
}