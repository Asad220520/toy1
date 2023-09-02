const backgroundMusic = document.getElementById("backgroundMusic");
const playPauseButton = document.getElementById("playPauseButton");
let isPlaying = false;

playPauseButton.addEventListener("click", () => {
  if (!isPlaying) {
    backgroundMusic.play();
    playPauseButton.textContent = "Pause";
    playPauseButton.classList.add("playing");
  } else {
    backgroundMusic.pause();
    playPauseButton.textContent = "Play";
    playPauseButton.classList.remove("playing");
  }
  isPlaying = !isPlaying;
});

document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 3000,
    },
  });
});
AOS.init();
