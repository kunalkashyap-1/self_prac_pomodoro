const sortBreak = 25;
const normalBreak = 25;
const longBreak = 25;

$(".start_btn").click(startTimer);
$(".start_btn").click(playSound);


function startTimer() {
    let min = sortBreak;
    let sec = min * 60;
    setInterval(mytimer, 1000);
    function mytimer() {
        let time = min + " : " + (sec % 60);
        if (sec % 60 === 0) {
            min--;
        }
        sec--;
        $("#time").text(time);
    }

}

function playSound(){
    const audio=new Audio("sounds/lofi.mp3");
    audio.play();
}


function toggle_dropdown() {
    $(".drop-list").toggle(".visible")
}