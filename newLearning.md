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
  - 함수 뒤에 ;세미콜론은 붙이지 않는다.

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
