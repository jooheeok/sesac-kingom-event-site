function findCast(e) {
  // 디폴트 동작 없애기
  e.preventDefault();
  let cast = null;
  const onepick = document.getElementsByName("onepick"); // nodeList가져옴

  for (var i = 0; i < onepick.length; i++) {
    if (onepick[i].checked == true) {
      cast = onepick[i];
    }
  }
  // cast가 비어있지 않다면, -> json에 파일을 넣어줘
  if (cast != null) console.log(`${cast.value}`);
  // 1. 현재 콘솔창에 찍히는 data를 json에 넣어줘야됨
  //
  else console.log(`선택 안됨`);
}

//selectFavActorSubmitBtn  ->얘가 클릭되면 할일

// create
// 1 클릭된 데이터가 json으로 전달되서 json내에 count가 변경됨

// reset
// 2 또 동시에 json에서 클릭한
// cast.value의 값이 json에 +count됨

// print
// 3. json에서 가져온 데이터를 갖고 char.api에서 print해주기

const selectFavActorSubmitBtn = document.querySelector(".submitBtn");
selectFavActorSubmitBtn.addEventListener("click", findCast);


// fetch
fetch("http://localhost:4000/cast")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));


  form.addEventListener("submit", (e) => { // 생략
    // 서버에 데이터 전송 fetch("http://localhost:4000/books", {
        method: "POST",
        body: bookInfo,
      })
    .then((response) => response.json()) .then((data) => console.log(data)) .catch((error) => console.log(error));
    });


// ---------------- 할일
// 체크된 게 무엇인지 알아내기
// 사람들을 다 넣어두고
// id값은 알아서 붙는 것 - 구분지을 정보

// 제한 - 기타 사람들
// 카운트를 json에 받아오는 게 좋을 듯
// 각각의 카운트를 저장해둬야됨

// ----------------------------------