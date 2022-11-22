const shareBtn = document.querySelector(
  ".fixed-header .inner .innerRight .share a"
);

shareBtn.addEventListener("click", showAlertPrepare);

function showAlertPrepare() {
  alert("준비중입니다. ");
}
