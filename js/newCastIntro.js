// let park = localStorage.setItem("park", 0);
// let ryu = localStorage.setItem("ryu", 0);
// let bae = localStorage.setItem("bae", 0);
// let huh = localStorage.setItem("huh", 0);
// let ju = localStorage.setItem("ju", 0);

let cast = [
  {
    id: 1,
    actorName: "park",
    count: 0,
  },
  {
    id: 2,
    actorName: "ryu",
    count: 0,
  },
  {
    id: 3,
    actorName: "bae",
    count: 0,
  },
  {
    id: 4,
    actorName: "huh",
    count: 0,
  },
  {
    id: 5,
    actorName: "ju",
    count: 0,
  },
];

let actor = null;

function findCast(event) {
  // console.log(event);
  const onepick = document.getElementsByName("onepick");

  for (var i = 0; i < onepick.length; i++) {
    if (onepick[i].checked == true) {
      actor = onepick[i];
    }
  }
  getData();
}

const selectFavActorSubmitBtn = document.querySelector(".submitBtn");
selectFavActorSubmitBtn.addEventListener("click", findCast);

function getData() {
  for (let i = 0; i < cast.length; i++) {
    if (cast[i].actorName == actor.value) {
      let getCount = parseInt(localStorage.getItem(cast[i].actorName));
      getCount += 1;
      localStorage.setItem(cast[i].actorName, getCount);
    }
  }
  console.log(getCount);
  getResultCount();
}

// 차트에 값 넣어주기
// 로컬 스토리지에서 값 가져오기
// let resultArr = [];
// //
// function getResultCount() {
//   let park = localStorage.getItem("park");
//   let ryu = localStorage.getItem("ryu");
//   let bae = localStorage.getItem("bae");
//   let huh = localStorage.getItem("huh");
//   let ju = localStorage.getItem("ju");

//   resultArr = [park, ryu, bae, huh, ju];
//   console.log(resultArr);
// }
