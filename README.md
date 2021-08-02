# MYME (Make Your Miracle Effectively)

## History

- **07-12 ~ 07-16** : 아이디어 및 주제 기획 완료, 명세 초안 작업, 와이어 프레임 및 목업 작업, 아키텍쳐 설계 진행중
- **07-16** : 조유식
- **07-19** : 함건유
- **07-19 ~ 07-23** : 하드웨어 구입 및 테스트, 펌웨어 제작(초음파, 소리감지, 카메라), 화면 구성(Mock up), DB 설계, aws server check, boiler plate 구성, 간단한 프론트 페이지 만들기

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

- **URL** : http://myme.today (현재는 임시로 배포한 클론 페이지로 이동합니다.)
- **배포 여부** : O / X
- **접속 가능** : 접속 가능 / 수정 중
- **HTTPS 적용** : O / X
- **PORT** : // 3rd Party에서 사용하는 포트가 있다면 기입해주세요. <- 기입 후 해당 주석 삭제
  <br>

### 개발 환경

#### Front-end

- **Framework** : React
- **지원 환경** : Web / Mobile / Web App
- **담당자** : 김민주, 함건유

#### Back-end

- **Framework** : Node.js
- **Database** : MySQL
- **담당자** : 백상욱

#### Smart-mirror client

- **Device** : RaspberryPi
- **지원 환경** : Web
- **담당자** : 김민지, 조유식, 허남규

#### Design

- **Framework 사용** : O / X
  - [Ant Design](https://ant.design/)
  - [Material-UI](https://material-ui.com/)
- **Design Tool 사용** : Adobe XD, Photoshop, Illustrator, Zeplin 등
- **담당자** : 백상욱

### Design Resources

**외부 템플릿 또는 에셋** (이미지 또는 링크 첨부)

**자체 제작 산출물** (필요시 이미지 또는 설명 첨부)

- LOGO
- CardView
- Button
- Calendar
  <br>

### 핵심 라이브러리

기본 제공하는 라이브러리 외 핵심 기능 구현에 사용한 라이브러리가 있다면 작성해주세요.  
예시 ) VR/AR 라이브러리, 애니메이션 라이브러리, 텍스트/사진/동영상 지원, 편집 라이브러리 등

- **AR CORE**
  - **링크** : https://developers.google.com/ar
  - **소개** : 구글에서 제공하는 AR 지원 라이브러리
  - **사용 기능** : 이미지 인식, 이미지 위 영상 표시
  - **담당자** : 팀원 A,
- **COLOR THIEF**
  - **링크** : https://lokeshdhakar.com/projects/color-thief/
  - **소개** : 이미지에서 색상을 추출해주는 라이브러리
  - **사용 기능** : 커버 사진에서 색상 추출 -> 배경 색상 변경
  - **담당자** : 팀원 A,
- **Animate.css**
  - **링크** : https://animate.style/
  - **소개** : css 애니메이션 지원 라이브러리
  - **사용 기능** : 메인 페이지 진입 시 애니메이션 사용
  - **담당자** : 팀원 A,
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
