var vid1 = document.getElementById("vid1");
var over = document.getElementById("over");
var over2 = document.getElementById("over2");
vid1.onpause = () => {
  if (vid1.getAttribute("src") === "clip1.mp4") {
    console.log("one");
    vid1.style.filter = "brightness(20%)";
    over.style.zIndex = 1;
  } else {
    console.log("two");
    vid1.style.filter = "brightness(20%)";
    over2.style.zIndex = 1;
  }
};

function fun2() {
  vid1.setAttribute("src", "clip3.mp4");
  over.style.zIndex = 0;
  vid1.style.filter = "brightness(100%)";
  vid1.play();
}

function fun3() {
  vid1.setAttribute("src", "clip2.mp4");
  over2.style.zIndex = 0;
  vid1.style.filter = "brightness(100%)";
  vid1.play();
}
