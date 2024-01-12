// selectors
let gobackwardbtn = document.getElementById("gobackward");
let startstopbtn = document.getElementById("startstop");
let goforwardbtn = document.getElementById("goforward");

let video = document.getElementById("video")
//start|stop
startstopbtn.addEventListener("click", () => {
if (video.paused) {
    video.play()
}
else video.pause()
});

//forward|backward 
gobackwardbtn.addEventListener("click", () => {
video.currentTime -= 5;
})

goforwardbtn.addEventListener("click", () => {
    video.currentTime += 5;
});
