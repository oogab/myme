# MYME (Make Your Miracle Effectively)

## History
- __07-12 ~ 07-16__ : 아이디어 및 주제 기획 완료, 명세 초안 작업, 와이어 프레임 및 목업 작업, 아키텍쳐 설계 진행중
- __07-16__ : 조유식
- __07-19__ : 함건유

## 목차

- [프로젝트 소개](#프로젝트-소개)   
- [텍스트 ... ](#프로젝트-소개)   
- [프로젝트 명세](#프로젝트-명세)
  - [배포 환경](#배포-환경)
  - [개발 환경](#개발-환경)
  - [Design Resources](#design-resources)
  - [핵심 라이브러리](#핵심-라이브러리)
<br>

## 프로젝트 소개
### MYME (Make Your Miracle Effectively)
당신의 일과를 루틴화 해보세요!

아침 루틴, 점심 루틴, 저녁 루틴에 들어갈 항목을 만들고 추가해보세요!
간단한 항목부터 다른 사람과 공유할 수 있는 챌린지까지 루틴화 시킬 수 있습니다.

해당 루틴을 스마트 미러에 연동하여 쉽게 관리하고 확인할 수 있습니다.
하루하루 꾸준히 당신의 루틴을 지키며 성장합시다!!
<br>

## 프로젝트 명세
### 배포 환경
- __URL__ : http://myme.today
- __배포 여부__ : O / X
- __접속 가능__ : 접속 가능 / 수정 중
- __HTTPS 적용__ : O / X
- __PORT__ : // 3rd Party에서 사용하는 포트가 있다면 기입해주세요. <- 기입 후 해당 주석 삭제
<br>

### 개발 환경
#### Front-end
- __Framework__ : React
- __지원 환경__ : Web / Mobile / Web App
- __담당자__ : 김민주, 함건유

#### Back-end
- __Framework__ : Node.js
- __Database__ : MySQL
- __담당자__ : 백상욱

#### Smart-mirror client
- __Device__ : RaspberryPi
- __지원 환경__ : Web
- __담당자__ : 김민지, 조유식, 허남규

#### Design
- __Framework 사용__ : O / X
  - [Ant Design](https://ant.design/)
  - [Material-UI](https://material-ui.com/)
- __Design Tool 사용__ : Adobe XD, Photoshop, Illustrator, Zeplin 등
- __담당자__ : 백상욱

### Design Resources
__외부 템플릿 또는 에셋__ (이미지 또는 링크 첨부)

__자체 제작 산출물__ (필요시 이미지 또는 설명 첨부)
- LOGO
- CardView
- Button
- Calendar
<br>

### 핵심 라이브러리
기본 제공하는 라이브러리 외 핵심 기능 구현에 사용한 라이브러리가 있다면 작성해주세요.   
예시 ) VR/AR 라이브러리, 애니메이션 라이브러리, 텍스트/사진/동영상 지원, 편집 라이브러리 등

- __AR CORE__
  - __링크__ : https://developers.google.com/ar
  - __소개__ : 구글에서 제공하는 AR 지원 라이브러리
  - __사용 기능__ : 이미지 인식, 이미지 위 영상 표시
  - __담당자__ : 팀원 A, 
- __COLOR THIEF__
  - __링크__ : https://lokeshdhakar.com/projects/color-thief/
  - __소개__ : 이미지에서 색상을 추출해주는 라이브러리
  - __사용 기능__ : 커버 사진에서 색상 추출 -> 배경 색상 변경
  - __담당자__ : 팀원 A,
- __Animate.css__
  - __링크__ : https://animate.style/
  - __소개__ : css 애니메이션 지원 라이브러리
  - __사용 기능__ : 메인 페이지 진입 시 애니메이션 사용
  - __담당자__ : 팀원 A,
<br>

## 협업 도구
- Jira
- Figma
<br>

## 개발 자료 링크 정리
- 웹엑스 미팅
  - https://ssafyclass.webex.com/meet/gjskarb1492
- 코로나 일별 확진자 등등 api
  - https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15043376
- 대중교통 api
  - https://lab.odsay.com/
  - https://topis.seoul.go.kr/refRoom/openRefRoom_4.do
- 미세먼지 api
  - https://www.data.go.kr/data/15073861/openapi.do
- 루티너리 개발 과정
  - https://www.notion.so/e65da5720ea348f7973cc057baca2e53
- 스마트폰 거울화 필름
  - https://liverex.net/1200
- 매직미러 개발 참고자료
  - https://steemit.com/kr/@wonsama/3oar99-kr-dev --국내 제작 블로그
  - https://www.youtube.com/watch?v=fkVBAcvbrjU&t=803s --해외 제작 영상
  - https://www.youtube.com/watch?v=RWjvJq4Zabk --해외 제작 영상