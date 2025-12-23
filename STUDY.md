## 12.23

- javascript는 html에 자동으로 연결되어 있다.

  - javascript는 html에 접근하고 읽을 수 있다.
  - document가 모든 것들의 시작이다.

- id를 가져오는 방법 : document.getElementById("title")
  - <h1 id="title">TITLE</h1>
  - const title = document.getElementById("title");
  - console.dir(title) >> element를 좀 더 자세하게 볼 수 있다.
  - title.innerText = "HOEYUNI" >> javascript에 의해 변경
  - id를 추가했고, 그 element를 getElementById함수를 통해 가져와서 수정했다.
  - html에서 항목을 가져오는 방법
    - document에서 항목들을 가져오기
    - 이 document에서 항목들 변경하기
