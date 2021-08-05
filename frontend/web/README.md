## 담당자

<a href="https://lab.ssafy.com/minjoo0112"><img src="https://secure.gravatar.com/avatar/9bdc67a1ff49729909fada0f0f14a994?s=800&d=identicon" width="100px;" alt=""/><br /><sub><b>김민주(Frontend)</b></sub></a>

<br/>

## Frontend

스켈레톤 코드를 기반으로 웹 페이지 UI 구현 중 입니다. <br/>
다른 Frontend 담당자와 branch를 나눠 개발 중이라 branch별 코드가 상이합니다.

<br/>

## 진행사항

- ### 2주차

  - 아이디어 및 주제 기획
  - 기능 명세서 초안 작성
  - 와이어 프레임 및 목업 작업
  - react 공부

- ### 3주차

  - 화면 상세 구성(목업 작업 완료)
  - 전체적인 React Component 설계
  - 회원가입, 로그인 UI 구현 시작
  - react 공부

- ### 4주차

  - 회원가입, 로그인 UI 구현 완료
  - 미러 화면 UI 구현
  - 챌린지 관련 페이지 UI 구현 시작

<br/>

## REACT

- state변경 함수의 비동기 처리 문제 - useEffect 사용
  `- useEffect는 컴포넌트가 렌더링/재렌더링될 때 실행되는 함수 useEffect(() => {}, [count]) 대괄호에 state 집어넣으면 state변경되면 이 코드 실행해주세요~ 라는 뜻 == count라는 state가 변경되고 나서 변경해주세요~`

## redux

Context API : 단순한 전역 상태 관리시 사용
리덕스: 상태를 더욱 체계적으로 관리 가능. 따라서 프로젝트의 규모가 클 경우 리덕스를 사용, 코드의 유지 보수성 높여주고 작업 효율도 극대화 해줌. 편리한 개발자 도구 지원, 미들웨어라는 기능을 제공하여 비동기 작업을 훨씬 효율적으로 관리할 수 있게 해줌.

1. 액션
   상태에 어떠한 변화가 필요하면 액션 발생 => 하나의 객체로 표현
   액션은 type필드를 반드시 가지고 있어야 함 => 이 값이 액션의 이름과 마찬가지
   그 외의 값들은 상태 업데이트를 할 때 참고해야 할 값

   {
   type: 'APP_TODO',
   data: {
   id: 1,
   text: '리덕스 배우기'
   }
   }

   1-1. 액션 생성 함수
   액션 객체를 만들어 주는 함수
   function addTodo(data) {
   return{
   type: 'ADD_TODO',
   data
   }
   }

2. reducer
   변화를 일으키는 함수.
   액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아옴.

## directory

```
/public
	/images
	-Vo_icon.png
-favicon.ico
-index.html
-logo192.png
-logo512.png
-manifest.json
-index.html
```

```
/src
	/common
	- CommonHooks.jsx                -> key press, local storage state
	- InfiniteScroll.jsx             -> handle infinite scroll
	- MediaQueryHooks.jsx            -> material-ui useMediaQuery hooks

	/components
		/Auth
			/SignResponsiveDialog        -> sigin in, sigin up, recover pw
		/Challenge
			/NewChallenge        		 -> new challenge
			/RecommendChallenge			 -> recommend challenge
			/TotalChallenge				 -> total challenge


	/context                         -> create context

	/css                             -> reset css

	/layout
		/Drawer                        -> side nav
		/Header                        -> head nav
		/Layout                        -> layout root

	/pages
	- Auth                       -> user
	- Challenge                  -> challenge
	- NotFound                   -> 404 page

```

```
App.js
```

```
index.js
```

```
serviceWorker.js
```

```
package.json
```

```
README.md
```

#### run

```
npm install
npm start
```
