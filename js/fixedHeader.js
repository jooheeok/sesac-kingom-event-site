// 준비중입니다.
const shareBtn = document.querySelector(
  ".fixed-header .inner .innerRight .share a"
);

shareBtn.addEventListener("click", () => {
  alert("준비중입니다. ");
});

// 윈도우의 창이 특정 스크롤 위치로 가게 만듦
const reservationBtn = document.querySelector(".reservation-btn");
reservationBtn.addEventListener("click", () => {
  console.log("click");
  window.scrollTo({ left: 0, top: 2300, behavior: "smooth" });
});
