// ✨ 리로드시 발생하는 문제 해결
// console.log(localStorage.getItem("park"));
if (localStorage.getItem("park") == null) {
  let park = localStorage.setItem("park", 0);
  let ryu = localStorage.setItem("ryu", 0);
  let bae = localStorage.setItem("bae", 0);
  let huh = localStorage.setItem("huh", 0);
  let ju = localStorage.setItem("ju", 0);
}

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
  const onepick = document.getElementsByName("onepick");
  for (var i = 0; i < onepick.length; i++) {
    if (onepick[i].checked == true) {
      actor = onepick[i];
    }
  }
  getData();
}
let resultArr = [];
const selectFavActorSubmitBtn = document.querySelector(".submitBtn");
selectFavActorSubmitBtn.addEventListener("click", findCast);
// ---------------------------------------
function getData() {
  for (let i = 0; i < cast.length; i++) {
    if (cast[i].actorName == actor.value) {
      let getCount = parseInt(localStorage.getItem(cast[i].actorName));
      getCount += 1;
      // key : value / key, value
      localStorage.setItem(cast[i].actorName, getCount);
      resultArr.push(cast[i].actorName, getCount);
    }
  }
  // 클릭이 발생하면 다시 리로드해줌
  location.reload();
}

// 차트 생성
// 차트에 내용 변경하기
// 로컬 스토리지에서 값 가져오기

// function printChart() {
//   const ctx = document.getElementById("myChart").getContext("2d");

//   const myChart = new Chart(ctx, {
//     type: "line",
//     data: {
//       labels: ["박병은", "류승룡", "배두나", "허준호", "주지훈"],
//       datasets: [
//         {
//           label: "킹덤 2, 최고의 배우",
//           data: resultArr,
//           backgroundColor: [
//             "rgba(255, 99, 132, 0.2)",
//             "rgba(54, 162, 235, 0.2)",
//             "rgba(255, 206, 86, 0.2)",
//             "rgba(75, 192, 192, 0.2)",
//             "rgba(153, 102, 255, 0.2)",
//             "rgba(255, 159, 64, 0.2)",
//           ],
//           borderColor: [
//             "rgba(255, 99, 132, 1)",
//             "rgba(54, 162, 235, 1)",
//             "rgba(255, 206, 86, 1)",
//             "rgba(75, 192, 192, 1)",
//             "rgba(153, 102, 255, 1)",
//             "rgba(255, 159, 64, 1)",
//           ],
//           borderWidth: 1,
//         },
//       ],
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     },
//   });
// }

//------------------------------reload시 실행되는 코드
// localStorage에서 가져오는 값
let park = localStorage.getItem("park");
let ryu = localStorage.getItem("ryu");
let bae = localStorage.getItem("bae");
let huh = localStorage.getItem("huh");
let ju = localStorage.getItem("ju");

let staticresultArr = [park, ryu, bae, huh, ju];

var ctx = document.getElementById("myChart").getContext("2d");

const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["박병은", "류승룡", "배두나", "허준호", "주지훈"],
    datasets: [
      {
        label: "킹덤 2, 최고의 배우",
        data: staticresultArr,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// // 변경하는 코드
// var canvas = document.getElementById("updating-chart"),
//   ctx = canvas.getContext("2d"),
//   startingData = {
//     labels: ["박병은", "류승룡", "배두나", "허준호", "주지훈"],
//     datasets: [
//       {
//         fillColor: "rgba(220,220,220,0.2)",
//         strokeColor: "rgba(220,220,220,1)",
//         pointColor: "rgba(220,220,220,1)",
//         pointStrokeColor: "#fff",
//         data: staticresultArr,
//       },
//       {
//         fillColor: "rgba(151,187,205,0.2)",
//         strokeColor: "rgba(151,187,205,1)",
//         pointColor: "rgba(151,187,205,1)",
//         pointStrokeColor: "#fff",
//         data: staticresultArr,
//       },
//     ],
//   },
//   latestLabel = startingData.labels[5];

// var myLiveChart = new Chart(ctx).Line(startingData, { animationSteps: 15 });

// setInterval(function () {
//   // Add two random numbers for each dataset
//   myLiveChart.addData(
//     [Math.random() * 100, Math.random() * 100],
//     ++latestLabel
//   );
//   // Remove the first point so we dont just add values forever
//   myLiveChart.removeData();
// }, 5000);

// console.log(resultArr);
// -> 변화되는 값도 적용될 수 있게 만들어 주기

// export { getData };
// import { getData } from "./newCastIntro";
