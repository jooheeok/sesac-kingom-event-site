# 프로젝트를 진행하며 새롭게 배우게 된 것

## favicon

### ✅ 파비콘 아이콘을 삽입해 봄

반응형을 만들게 되면 favicon도 기기별로 셋팅해주는 것 같던데 이후에 반응형으로 수정할때 이부분도 실험해보면 좋을 것 같음 (＋ 기기별 favicon 설정)
<br>
<br>

## exprot & import

### ✅ export로 함수 내보내주기 (재사용 👍)

1. 함수 앞에 export를 사용해서 함수를 내보내준다.

- 규칙
  - 함수 뒤에 ;세미콜론을 붙이지 않는다.

```javascript
export function showAlertPrepare() {
  alert("준비중입니다. ");
}
```

2. 선언부와 떨어진 곳에 export를 사용해서 함수를 내보내준다.

- 규칙
  - {중괄호} 안에 함수명을 입력해준다.
  - 여러개를 내보낼 수 있음
  - export문은 일반적으로 js파일의 가장 하단에 넣지만, 상단에 넣어도 동일하다.

```javascript
function showAlertPrepare() {
  alert("준비중입니다. ");
}

export { showAlertPrepare };
```

### ✅ import로 함수 가져오기 (재사용 👍)

무언가 가져오고 싶다면 아래와 같이 목록을 넣어주면 된다.

```javascript
import { showAlertPrepare } from "./js/fixedHeader.js";
```

<br>
<br>

## 스크롤 이벤트

### new IntersectionObserver()

div가 현재 화면에 보이는지 파악이 쉬워짐

✅ 이전에 사용하던, 스크롤 이벤트보다 훨씬 쉽고 간단함

### css

```css
body {
  align-items: center;
  background: black;
  height: 6000px;
  font-family: "nanumsquare";
  text-align: center;
}
div {
  margin-top: 1000px;
  color: white;
  /* opacity 같은게 .5초에 걸려서 서서히 변경될 것 */
  opacity: 0;
  transform: rotate(-720deg);
  transition: all 0.8s;
}
.last {
  display: flex;
  justify-content: center;
}
```

### html

```html
<div><h1>iphone 15 출시</h1></div>
<div><h1>충전포트를 use-c타입으로 바꿔달라구요?</h1></div>
<div><h1>그래서 충전포트를 제거했습니다.</h1></div>
<div class="last">
  <img src="../images/netflixFooter.jpeg" alt="이미지" style="width: 80%" />
</div>
```

### javascript

```javascript
let observer = new IntersectionObserver((e) => {
  //여기에서 아래에 감시받는 element들에게 할 동작을 넣어주는 것
  // 예를들어 ) 박스에 애니메이션 추가해주세요
  // 화면에 보일 때만
  //console.log(e); //e => [1,2,3,4]이런식으로 array로 들어있음
  e.forEach((box) => {
    console.log("box.isIntersectionRatio: ", box.isIntersectionRatio);
    if (box.isIntersecting) {
      //box.isIntersecting화면에 보이면 true 안보이면 false
      // box.target.style = "opacity:1";
      box.target.style.opacity = 1;
      box.target.style.transform = "rotate(0deg)";
    } else {
      // 감시중인 div박스가 사라질 경우에도 해당 스타일을 넣을 수 있음
      box.target.style = "opacity:0";
      // 이렇게 되면, 스크롤을 위아래로 계속 움직여도 동일하게 계속 사라졌다 나타나는 것을 반복함
    }
    box.isIntersectionRatio;
  });
});
```

### observe()라는 함수를 사용할 수 있음

- 이함수는 내가 원하는 html요소를 감시해줌
- 특정 요소가 화면에 등장하는지 사라지는지 등을 이 함수가 능동적으로 감시해줌
- observer.observe("html요소를 괄호 안에 넣으면 됨");

### javascript

```javascript
let div = document.querySelectorAll("div");
console.log(div);
// 아래의 코드에 감시를 붙인 것
observer.observe(div[0]);
observer.observe(div[1]);
observer.observe(div[2]);
observer.observe(div[3]);
```

<br>
<br>

## 이미지 div에 맞추기

- 상위 div에 꽉채우고 싶고
- 비율이 깨지지 않으며
- 이미지에 가운데 부분이 보이게 하고 싶고
- 넘치는 부분은 자르고 싶을때 사용할

#### html

```html
<div class="image-wrap">
  <img class="header-img" />
</div>
```

#### css

```css
.image-wrap {
  width: 380px;
  height: 220px;
  overflow: hidden;
  margin: 0 auto;
}
.header-img {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
```
