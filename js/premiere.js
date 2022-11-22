// 시사회 신청 이벤트
const applicationBtn = document.querySelector(".applicationBtn");
const premiereEventHiddenArea = document.querySelector(
  ".premiere-event-hidden-area"
);

applicationBtn.addEventListener("click", () => {
  premiereEventHiddenArea.classList.toggle("toggle");
  window.scrollTo({ left: 0, top: 2700, behavior: "smooth" });
});

// enter키를 누를 경우 충돌이 생길까?
// form태그 안에서 enter키를 누르면, submit이 발생하도록
const form = document.querySelector(".premiere-event-hidden-area form");
// console.log("form: ", form);
const submitBtn = document.querySelector(".submit-btn");
// console.log("submitBtn: ", submitBtn);

function applicationPremiere() {
  console.log("submit!");
  // console.log("e", e);
  // console.log("e", e.value);
}

// submit은 안되고, click은 됨
submitBtn.addEventListener("submit", applicationPremiere);

// 3716
// 만약 스크롤의 위치가 3716
// 조건이랑 다 맞고 -> 요소에도 범위에 맞춰 allow="autoplay"붙는거 떼지는거 다 보임
// 나중에 확인해보기

window.addEventListener("scroll", (event) => {
  let scrollY = this.scrollY;
  // let scrollX = this.scrollX;
  if (scrollY >= 3716 && scrollY < 4000) {
    const iframe = document.querySelector("iframe");
    iframe.setAttribute("allow", "autoplay");
    console.log("넘친다!!!!!");
  } else {
    iframe.removeAttribute("allow", "autoplay");
  }
});
