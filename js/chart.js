// import { getData } from "./newCastIntro";

// 차트 생성
// 차트에 내용 변경하기
const ctx = document.getElementById("myChart").getContext("2d");

// 로컬 스토리지에서 값 가져오기
let park = localStorage.getItem("park");
let ryu = localStorage.getItem("ryu");
let bae = localStorage.getItem("bae");
let huh = localStorage.getItem("huh");
let ju = localStorage.getItem("ju");

let resultArr = [park, ryu, bae, huh, ju];
console.log(resultArr);
// -> 변화되는 값도 적용될 수 있게 만들어 주기

const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["박병은", "류승룡", "배두나", "허준호", "주지훈"],
    datasets: [
      {
        label: "킹덤 2, 최고의 배우",
        data: resultArr,
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
