### 크몽 과제 설명

- API는 구현하지 않고, 있다고 가정하고 작업함
- UI 스타일은 `styled-components`를 사용해서 구현함
  - 디자인에 없는 버튼 hover animation, 장바구니 비어있는 경우 UI, 결제 완료 Modal을 추가함
- eslint, prettier 코드 스타일링은 에이팀벤처스(현 회사) 설정을 사용함
- 폴더 구조 및 추가 라이브러리는 CRA를 이용해 만든 [보일러 플레이트](https://github.com/Aimho/boilerplate-react)와 최근 작업물을 인용하여 진행함
- `private` Repository에서 작업했으며, [결과물](https://condescending-kilby-1bc340.netlify.app/)은 Netlify로 배포함
- 패키지 설치 (`yarn install`) 후 실행하면 동작함(`yarn start`)
- WakaTime에 기록된 작업 시간은 총 11h 38m 임

### 폴더 구조 설명

- public
  - data: (json) 더미 데이터 파일
- src
  - api: (axios) 과일 데이터 json 요청
  - assets (fonts, reset.css) 기본 스타일 및 리소스 파일
  - component: 재사용 컴포넌트
  - hooks: custom hooks
  - modules: redux 설정
  - page: view 컴포넌트
  - util: 재사용 함수

### 결과물 설명(공통)

- 반응형
  - 기본 스타일 Desktop
  - @media only screen and (max-width: 960px) Tablet Portrait
  - @media only screen and (max-width: 576px) Mobile

### 결과물 설명 (상품목록)

- 과일 목록 가져오기
  - JSON 더미 데이터를 불러오며, `page`폴더 `index.tsx`에서 `useLayoutEffect`를 사용해서 데이터를 요청함
  - 가져온 데이터의 `isPrime` 여부를 확인하여 소팅 후 redux에 저장함
- 상품목록 필터링
  - route 주소에 `filter`를 감지하여 list를 변경하도록 구현함
- 장바구니 뱃지 숫자
  - 장바구니에 담은 아이템 리스트의 length를 표시함
- 상품 수량
  - 과일목록 id와 장바구니 과일목록 id가 같은 object가 있으면 장바구니 과일 데이터를 카드 컴포넌트에 넘기고, 카드 컴포넌트에서는 과일 데이터 잔량 - 장바구니 과일 데이터 수량을 계산하여 표시함
  - `담기` 버튼 클릭 시 수량 증가, `빼기` 버튼 클릭 시 수량 감소
  - 과일 데이터 잔량 - 장바구니 과일 데이터 수량이 같은 경우 `담기` 버튼 비활성화 시킴

### 결과물 설명 (장바구니)

- 구매하기
  - API를 구현하지 않아, 장바구니 화면에서 결제하기 버튼을 클릭하면 `request body`를 확인시켜주는 Modal 컴포넌트를 추가하였으며 Modal이 종료되면 장바구니 항목을 비우고, 상품목록으로 돌아가도록 구현함
- 수량 감소
  - `취소` 버튼 클릭 시 수량 감소
  - `취소` 버튼 클릭 시 감소한 수량의 값이 0인 경우 장바구니 리스트에서 해당 id를 가진 아이템 제거
- 상품 금액
  - prime 과일과 일반 과일의 합을 따로 계산하여 표시하고 계산한 값들을 더해서 총 상품 금액을 표시함
