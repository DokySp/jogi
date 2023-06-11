# Chrome App 만들어보기

## Concept
- [Papier]()앱을 계정연동하여 모든 기기의 chrome에서 내용을 확인할 수 있도록 하는 것

## Plan
- Step 1. 개인 서버를 활용하여 별도의 로그인 인증 없이 메모를 연동
- Step 2. 간단한 개인 인증을 통해 계정별 메모 관리
- Step 3. Android & iOS 앱 혹은 위젯을 제작하여 배포

## Spec.
- React.js, Markdown Editor
- Node.js & DBMS(Firebase 혹은 별도의 DBMS 활용)
- Android Native App

## 기술 관련 조사

### 크롬 확장 앱 만들기
- [크롬 앱(Chrome App) 만들기 #1](https://steemit.com/whan/@anpigon/chrome-app-1)
- [[Chrome Extension] 크롬 확장 프로그램을 개발해보자](https://yscho03.tistory.com/103)
- [Manifest file format - Chrome Developers](https://developer.chrome.com/docs/extensions/mv2/manifest/)

### chrome_url_overrides
- [chrome_url_overrides - Mozilla](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides)
- [chrome extension New Tab customizing을 위한 개발 환경 만들기](https://vroomfan.tistory.com/31)
- [리액트와 뷰로 크롬 익스텐션 빌드하기](https://merrily-code.tistory.com/183)
- [Building a New Tab Chrome Extension with Zero Dependencies](https://hackernoon.com/building-a-new-tab-chrome-extension-with-zero-dependencies-5zlh3ue6/)
