const sortBreak = 25;
const normalBreak = 25;
const longBreak = 25;




let clicked = 0;
$(".start_btn").click(() => {
    if (!clicked) {
        startTimer();
        playSound();
    }
    clicked = 1;
});



function startTimer() {
    let minutes = 10;
    let seconds = minutes * 60;
    setInterval(mytimer, 1000);
    function mytimer() {
        min = ((minutes % 60) < 10 ? "0" + (minutes % 60) : minutes % 60);
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