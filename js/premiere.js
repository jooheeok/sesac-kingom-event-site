// 시사회 신청 이벤트
const applicationBtn = document.querySelector(".applicationBtn");
const premiereEventHiddenArea = document.querySelector(
  ".premiere-event-hidden-area"
);

applicationBtn.addEventListener("click", () => {
  premiereEventHiddenArea.classList.toggle("toggle");
  window.scrollTo({ left: 0, top: 3000, behavior: "smooth" });
});

// 스크롤에 좌표값 확인하기
// window.addEventListener("scroll", (event) => {
//   let scrollY = this.scrollY;
//   let scrollX = this.scrollX;
//   console.log("scrollY : ", scrollY);
//   console.log("scrollX : ", scrollX);
// });

window.addEventListener("scroll", (event) => {
  let scrollY = this.scrollY;
  // let scrollX = this.scrollX;
  if (scrollY >= 3716 && scrollY < 4000) {
    const iframe = document.querySelector("iframe");
    iframe.setAttribute("allow", "autoplay");
    // console.log("넘친다!!!!!");
  } else {
    iframe.removeAttribute("allow", "autoplay");
  }
});
// 만약 스크롤의 위치가 3716
// 조건이랑 다 맞고 -> 요소에도 범위에 맞춰 allow="autoplay"붙는거 떼지는거 다 보임
// 나중에 확인해보기
