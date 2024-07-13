let video = document.querySelectorAll(".silde-video");
for (let i = 0; i < video.length; i++) {
  video[i].onmouseover = () => {
    video[i].play();
  };
  video[i].onmouseleave = () => {
    video[i].pause();
  };
}
