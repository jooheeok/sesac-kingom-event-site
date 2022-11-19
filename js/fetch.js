fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json()) //json형태로 파싱
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

/* 결과
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
*/

//  json 파일을 사용하여 간단한 테스트를 위한 REST API server를 구축할 수 있는 패키지
