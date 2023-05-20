const button_play = document.getElementById("a_play_btn");
const pop_up_loading = document.getElementById("pop-up-loading");

button_play.addEventListener("click", function () {
  openPopUpLoading();
});

const openPopUpLoading = () => {
  pop_up_loading.classList.add("open-pop-up-loading");
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

function redirect() {
  window.location.href = "game_W.html";
}

button_play.addEventListener("click", function () {
  setTimeout(redirect, 3000);
});
