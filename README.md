### 오피지지 과제 개요

- WakaTime에 기록된 작업 시간은 총 27h 35m 임
- eslint, prettier 코드 스타일링은 에이팀벤처스(현 회사) 설정을 사용함
- UI 스타일은 `styled-components`를 사용해서 구현함
- 폴더 구조 및 추가 라이브러리는 CRA를 이용해 만든 [보일러 플레이트](https://github.com/Aimho/boilerplate-react)와 최근 작업물을 인용하여 진행함
- `private` Repository에서 작업했으며, [결과물](https://wonderful-brattain-96bac2.netlify.app/)은 Netlify로 배포함
- 패키지 설치 (`yarn install`) 후 실행하면 동작함(`yarn start`)

### 폴더 구조

- public
  - data: (json) 더미 데이터 파일(Netlify 배포 환경에서 사용)
- src
  - api: (axios) 과일 데이터 json 요청
  - assets (fonts, reset.css, icons, images) 기본 스타일 및 리소스 파일
  - component: 재사용 컴포넌트
  - config: 환경변수
  - hooks: custom hooks
  - locale: i18n 번역
  - modules: redux 설정
  - page: view 컴포넌트
  - util: 재사용 함수

### 요구사항 구현내용

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
  - 색상 표시하는 것을 별도의 컴포넌트로 분리함(`ColorPrint`) <br/>
  [미적용] 색상기준에서 평점은 구현했으나 어디에 사용하는지 몰라서 적용하지 않음 (op.gg 페이지에서 확인한 결과 모두 KDA 색상으로 표시되는 것 같음...)

### 요구 사항에 없지만 구현한 것

- 메인 페이지 별도로 추가함
- API에서 불러온 데이터 중에 영어로 표시되는 항목이 있어서 `i18n`을 사용하여 번역함
- zeplin에서 다운받을 수 없는 리소스들은 [op.gg](https://www.op.gg/)에서 가져옴
- 계산 불가능 하거나 찾을 수 없는 데이터는 zeplin에 명시된 고정 텍스트로 넣음
  - 챔피언 승률 분당 CS
  - 매치 상세 Summoner 챔피언 이름
- Summary, 매치 상세 아이템 UI에 표시 개수보다 모자라면 DummyUI가 노출되도록
- 반응형
  - 기본 스타일 Desktop
  - @media only screen and (max-width: 960px) Tablet Portrait
