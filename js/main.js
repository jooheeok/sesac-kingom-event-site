// 시사회 상영 등급 제한으로 페이지 로드시 바로 confirm함수를 사용해서 1차로 걸러냄
// confirm 함수 - 확인과 취소 버튼의 값을 읽을 수 있음
function show19Alert() {
  //   document.body.style.background = "black";
  if (
    confirm(`본 시사회의 관람가는 19세 이상입니다. 
귀하의 나이가 19세 이상이라면 '확인'을
아니라면 '취소'를 눌러주세요.`)
  ) {
    alert("이벤트 페이지가 로드됩니다.");
  } else {
    alert("이전 페이지가 로드됩니다. ");
    // 이전 페이지가 없어서 일단 naver메인으로 이동
    location.href = "https://www.naver.com";
  }
}

//스크롤에 좌표값 가져오기

// window.addEventListener("scroll", (event) => {
//   let scrollY = this.scrollY;
//   let scrollX = this.scrollX;
//   console.log(scrollY);
//   console.log(scrollX);
// });
