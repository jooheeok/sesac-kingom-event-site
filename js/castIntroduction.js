let actor = null;

function findCast(event) {
  // console.log(event);
  const onepick = document.getElementsByName("onepick");

  for (var i = 0; i < onepick.length; i++) {
    if (onepick[i].checked == true) {
      actor = onepick[i];
    }
  }
  // console.log(actor);

  // if (actor != null) console.log(`${actor.value}`);
  // else console.log(`선택 안됨`);
  getData();
}

const selectFavActorSubmitBtn = document.querySelector(".submitBtn");
selectFavActorSubmitBtn.addEventListener("click", findCast);

// addEventListener에 click은 되고 submit은 안되는 이유

// fetch
// fetch("http://localhost:4000/cast")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// form.addEventListener("submit", (e) => { // 생략
//   // 서버에 데이터 전송 fetch("http://localhost:4000/books", {
//       method: "POST",
//       body: bookInfo,
//     })
//   .then((response) => response.json()) .then((data) => console.log(data)) .catch((error) => console.log(error));
//   });

// ---------------- 할일
// 체크된 게 무엇인지 알아내기
// 사람들을 다 넣어두고
// id값은 알아서 붙는 것 - 구분지을 정보

// 제한 - 기타 사람들
// 카운트를 json에 받아오는 게 좋을 듯
// 각각의 카운트를 저장해둬야됨

// ----------------------------------
localStorage.setItem(cast[i].actorName, getCount);
let aaa = 0;
function getData() {
  fetch("http://localhost:4000/cast")
    .then((response) => response.json()) //.json뒤에 () 붙이는 것 주의할 것!
    .then((data) => {
      // console.log(data);
      //   data.forEach((ele) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].actorName == actor.value) {
          console.log("1 : ", data[i].actorName);
          data[i].count += 1;
          console.log(data[i].count);
          aaa = data[i].count;
          console.log(data[i].count);
        }
      }
      bbb = { id: 5, actorName: "ju", count: aaa };
      postData(bbb);
    });
}

function postData(data) {
  // console.log(aaa);
  fetch("http://localhost:4000/cast", {
    method: "POST",
    body: JSON.stringify({ id: 5, actorName: "ju", count: 0 }),
    header: {
      "content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => console.log(res.status));
  console.log(bbb);
}
