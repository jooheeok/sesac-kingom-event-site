const shareBtn = document.querySelector(
  ".fixed-header .inner .innerRight .share a"
);

shareBtn.addEventListener("click", showAlertPrepare);

function showAlertPrepare() {
  alert("준비중입니다. ");
}
// 이거 붙이면 갑자기 안먹음 - 확인해보기
// export { showAlertPrepare };

// 스크롤 이벤트 - fixed header 컬러 변경
/*
let observer = new IntersectionObserver((e) => {
  console.log(e);
  const fixedHeaderLogo = document.querySelector(
    ".fixed-header .inner .innerLeft .logo a span "
  );
  const shareIcon = document.querySelector(
    ".fixed-header .inner .innerRight .share a img"
  );
  const reservationBtn = document.querySelector(
    ".fixed-header .inner .innerRight .reservation .reservation-btn "
  );
  if (e.Intersecting) {
    fixedHeaderLogo.style = "color:white";
  } else {
    fixedHeaderLogo.style.color = "black";
  }
});
// 가져오기
const header = document.querySelector(".header");

// 감시 붙이기
observer.observe(header);

// fixedHeaderLogo.sty
// console.log(());
// e[0].target.style.color = "white";
// e[1].target.style.boder = "1.5 solid white";
// e[1].target.style.color = "white";
// e[2].target.style.color = "white";
*/
