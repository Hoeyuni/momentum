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

## 12.29

- innerText, innerHtml
  - innerText: 요소의 텍스트만 가져온다.
  - innerHtml: 요소의 HTML 마크업을 가져온다.
    뭘 써야할까?
  - innerText: 이 경우엔 텍스트만 다루므로, 단순히 텍스트만 변경시에 유리
  - innerHtml을 쓸 경우, html 태그를 넣으면 브라우저가 이를 파싱해서 실제 요소로 만들어준다. 새로운 DOM 요소를 생성

## 12.30

- input 필드를 만들고, 입력한 내용이 저장되도록 하기

  - https://developer.mozilla.org/ko/docs/Web/API/Element/input_event
  - https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage

- localStorage의 key와 value에 저장은 할 수 있겠는데, item이 2개 이상이면 어떻게 해야할까
  - 객체?
  - setItem 한 것들을 객체로 이루어진 배열로. push?
  - https://hianna.tistory.com/697
    - localStorage의 key와 value를 얻어오는 방법

## 1.12

- localStorage에 배열 저장하기

  - localStorage에는 오직 문자열(string)만 저장할 수 있음
  - 이를 해결하려면 JSON.stringify()를 써서 배열을 문자열로 변환하고(저장할 때)
  - JSON.parse()를 써서 다시 문자열을 배열로 변환(불러올 때)

- 문제가 생겼다.
  1. 새로고침 하면 localStorage에 있는 값이 바로 보이지 않는다.
  2. 심지어 새로 입력하면 초기화된다.
  3. 빈칸으로 엔터해도 적용된다. -> 해결

## 1.13

- 문제가 생겼다. >> 해결하기
  1. 새로고침 하면 localStorage에 있는 값이 바로 보이지 않는다.
  2. 심지어 새로 입력하면 초기화된다.

새로고침해도 localStorage에는 있는데 이걸 화면에 보여줘야 한다

로컬스토리지에는 문자열만 저장되는데, 이걸 배열로 파싱해서 todos에 저장

> > 저장하지 않으면 새로 입력하는 데이터로 덮어씌워져버림
> > paintTodoList 함수는 newTodo를 화면에 표시해주는 함수
> > forEach로 todos를 하나씩 탐색해서 화면에 표시

해결 완료

- 이제 삭제하는 로직을 생각해보자.
  - 삭제 버튼부터 만든다
  - 순서도 중요하다
  - 배열에서 삭제함과 동시에 화면에서도 사라져야 한다.
