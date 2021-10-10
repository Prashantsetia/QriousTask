var vidplayer = document.getElementById("vidplayer");
var over = document.getElementById("over");
var over2 = document.getElementById("over2");
var head = document.getElementById("head");

vidplayer.onpause = () => {
  if (vidplayer.getAttribute("src") === "clip1.mp4") {
    console.log("Overlay for Clip 1");
    vidplayer.style.filter = "brightness(20%)";
    over.style.zIndex = 1;  // hiding the video by frame 1 --> options Home and Photography
  } else {
    console.log("Overlay for clip 2");
    vidplayer.style.filter = "brightness(20%)";
    over2.style.zIndex = 1; // hiding the video by frame 2 if clip1 is not running (means - it is for clip 2) --> options Home and Photography
  }
};

function fun2() {
  vidplayer.setAttribute("src", "clip2.mp4");
  over.style.zIndex = 0;
  vidplayer.style.filter = "brightness(100%)";
  vidplayer.play();
}

function fun3() {
  vidplayer.setAttribute("src", "clip3.mp4");
  over2.style.zIndex = 0;
  vidplayer.style.filter = "brightness(100%)";
  vidplayer.play();
}


extra = ()=>{
  head.innerHTML = "This Option Has Been Disabled For Now !!";
  head.style.color = "red";

  setTimeout(() => {
    head.innerHTML = "Pause The Video To See The Magic";
    head.style.color = "black";
  }, 3000);
}
