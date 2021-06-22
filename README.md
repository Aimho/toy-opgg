OPGG 클론코딩 (https://aim-clone-opgg.netlify.app/)
- 소환사명 입력시 더미데이터로 노출됨

### 개요
- UI 스타일은 `styled-components`를 사용해서 구현함
- 폴더 구조 및 추가 라이브러리는 CRA를 이용해 만든 [보일러 플레이트](https://github.com/Aimho/boilerplate-react)와 최근 작업물을 인용하여 진행함
- `private` Repository에서 작업했으며, Netlify로 배포함

### 폴더 구조

- public
  - data: (json) 더미 데이터 파일
- src
  - api: (axios) 데이터 json 요청
  - assets (fonts, reset.css, icons, images) 기본 스타일 및 리소스 파일
  - component: 재사용 컴포넌트
  - config: 환경변수
  - hooks: custom hooks
  - locale: i18n 번역
  - modules: redux 설정
  - page: view 컴포넌트
  - util: 재사용 함수

### 구현내용

- 검색시 검색한 소환사 정보 노출 및 최근 검색리스트 노출 (`SearchSummoner` 컴포넌트)
  - 검색한 소환사의 정보를 `LocalStorage`를 통해 저장하고 불러옴
  - 최근 검색 리스트 UI를 위해 `Popover` 컴포넌트를 구현함
- 매치 리스트 타입에 따라 필터링
  - match game 리스트에서 `gameType` string이 같은 경우 주소창에 filter query를 추가하여 구현함
  - 상태를 들고 있지 않고 주소에 입력해서 새로고침해도 필터가 적용됨
- 아이템에 mouse hover 시 툴팁 노출 (`ToolTip` 컴포넌트)
  - `ToolTip` 컴포넌트를 구현했으며 IE에서는 `max-content`를 지원하지 않아 구글링하여 해결함
  - Match에서 사용한 아이템 이미지에 `ItemApi`에서 불러온 정보의 `key`값이 포함되어 있는걸 확인하고 이미지에서 `key`값 추출 후 비교하여 해당하는 정보를 노출시킴
- 매치 더보기 기능 제외
  - 세부 UI는 구현하지 않고 Collapse 버튼 클릭 시 동작하는 것만 구현함
- 탭 선택에 따라 프리시즌과 7일간의 랭크 승률을 노출(정렬기준: 플레이 게임 수)
  - `SummonerApi`를 통해서 데이터를 불러오고 `redux`에 저장 시키기 전, 플레이 게임 수로 `sorting`후 저장함
  - 탭 선택에 따라 UI 노출되도록 구현함
- KDA 표시 및 색상 UI
  - KDA 계산, 승률 계산 하는 것을 재사용 함수(`calculate.ts`)로 분리함
  - 색상 표시하는 것을 별도의 컴포넌트로 분리함(`ColorPrint`)
- API에서 불러온 데이터 중에 영어로 표시되는 항목 `i18n`을 사용하여 번역함
- Summary, 매치 상세 아이템 UI에 표시 개수보다 모자라면 DummyUI가 노출되도록 함
- 모바일 대응함
  - 기본 스타일 Desktop, min-width: 1080px
  - @media only screen and (max-width: 600px)
