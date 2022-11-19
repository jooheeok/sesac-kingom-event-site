// 시사회 신청 이벤트
const applicationBtn = document.querySelector(".applicationBtn");
const premiereEventHiddenArea = document.querySelector(
  ".premiere-event-hidden-area"
);

applicationBtn.addEventListener("click", () => {
  premiereEventHiddenArea.classList.toggle("toggle");
});

// enter키를 누를 경우 충돌이 생길까?
// form태그 안에서 enter키를 누르면, submit이 발생하도록
