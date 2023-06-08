# Solo ShoppingMall Project
- 북마크 기능이 있는 상품페이지를 구현합니다. 기본적인 디자인은 <a href="https://www.figma.com/file/TfWAvMXegGEJiS3etqOSfs/FE-S4-project?type=design&t=2WE0lwrhOr3Rt7Ax-0">해당 링크</a>에서 확인할 수 있습니다. 해당 프로젝트의 목적은 주어진 디자인에 맞추어 기능을 구현하는 방법론을 학습합니다.
- 기존에 만들었던 <a href="https://github.com/ddaeunbb/fe-sprint-coz-shopping">과제</a>를 타입스크립트 기반으로 리팩토링를 진행하였습니다.
- 진행기간 : 2023.05.26~06.02
- 리팩토링기간 : 2023.06.07~
<br>

## Stack

<div>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
</div>
<div>
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">
<img src="https://img.shields.io/badge/reduxtoolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white">
</div>
<div>
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
</div>
<br>

## Folder Structure
```
📦project
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂bookmark
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┣ 📂filter
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂button
 ┃ ┃ ┣ 📂filter
 ┃ ┃ ┣ 📂layout
 ┃ ┃ ┣ 📂modal
 ┃ ┃ ┣ 📂productCard
 ┃ ┃ ┗ 📂toast
 ┃ ┣ 📂hooks
 ┃ ┣ 📂modules
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂bookmark
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┗ 📂products
 ┃ ┣ 📂types
 ┃ ┣ 📂utils
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜main.tsx
 ┣ 📜.eslintrc.js
 ┣ 📜index.html
 ┣ 📜package.json
 ┣ 📜tailwind.config.js
 ┣ 📜tsconfig.json
 ┗ 📜vite.config.ts
```
<br>

## 페이지 구현 모습
https://github.com/ddaeunbb/solo-shoppingmall/assets/82816029/78ce4c37-dcba-4fc5-95e4-c9e9f5c6d380

<br>
<br>
<br>

## 1. BugFix
#### 1-1 HamburgerModal
![bugfix](https://github.com/ddaeunbb/solo-shoppingmall/assets/82816029/7bf435b0-7260-431e-a702-b2b980a47a52)
- 햄버거 모달이 hover될 때마다, 안쪽 자식 요소가 부모요소 바깥으로 나오는 것을 수정해주었습니다.


#### 1-2 ToastAlram
<img src="https://github.com/ddaeunbb/solo-shoppingmall/assets/82816029/eff617cd-01b3-4de3-836e-310be04fb4e3" width="600px">

- 알림토스트가 추가될 때는 보이지만, 제거될 때는 보이지 않는 문제를 겪었습니다.
- useSelector로 가져올 때마다 state의 값이 true이면 다른 컴포넌트를, false이면 다른 컴포넌트를 보여주게끔 하려했으나 서칭 중, 일반적으로 쓰이는 로직은 아니라는 피드백을 받게 되었습니다.
- 따라서 state 값을 `queue`의 형태로 배열로 수정하고, 배열의 개수마다 알림토스트를 보이도록 수정하였습니다.
  - 수정 후
<img src="https://github.com/ddaeunbb/solo-shoppingmall/assets/82816029/0a18f403-15a2-468c-a1ba-03ba821300b1" width="600px">

<br>
<br>
<br>


## 2. 프로젝트 진행 중 배운 것
#### 2-1 tailwind preflight
- reset.css를 적용하려고 하다가 `@tailwind base;`를 index.css에 적용하면 **reset.css와 비슷한 preflight**가 적용됨을 알 수 있었습니다. 더 자세한 내용은 <a href="https://www.daleseo.com/tailwind-preflight/">링크</a>를 통해 알 수 있었습니다. 또한 <a href="https://tailwindcss.com/docs/preflight#border-styles-are-reset-globally">테일윈드 공식문서</a>를 통해서도 확인 할 수 있었습니다. 
---
#### 2-2 rootReducer type 참조 (useSelector, useDispatch)
- useSelector로 store에 접근할 때마다, state의 타입을 지정해야한다는 에러메세지 보게 되었습니다.
- 에러를 해결하기 위해 RootState로 interface화하여 해결하였으나,**이는 잘못된 방식이었으며, <a href="https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-state-type">Redux Toolkit 공식문서</a>를 통해 코드를 수정**하였습니다.
  - 코드 수정 전 　 <img width="335" alt="스크린샷 2023-05-30 오후 10 46 28" src="https://github.com/ddaeunbb/solo-shoppingmall/assets/82816029/cdf64f7d-8a64-4aea-afec-f8d94027bc77">
  - 코드 수정 후 　 <img width="400" alt="스크린샷 2023-05-30 오후 10 46 34" src="https://github.com/ddaeunbb/solo-shoppingmall/assets/82816029/7cca3188-bc96-4a81-8a00-835478a1773b">
---
#### 2-3 tailwind-styled-components props
- tw 모듈은 동적으로 클래스를 어떻게 할당할 수 있을지에 대해 헤매고 있었는데 <a href="https://jiwoo84.tistory.com/173">링크</a>를 통해서 동적 클래스 할당하는 방법을 알 수 있게 되었습니다.
##### 코드 수정 전 
```
const Image = tw.img`
  w-${(props) => props.width}
  h-${(props) => props.height}
  cursor-pointer
`
```
##### 코드 수정 후
```
interface ImageProps {
  width: number;
  height: number;
}

const Image = tw.img<ImageProps>`
  w-${(props) => props.width}
  h-${(props) => props.height}
  cursor-pointer
`
```
---
#### 2-4 action-payload type지정
- 타입지정을 하지 않으면 any로 타입이 지정이 되어서, action-payload의 타입을 지정하게 되었습니다.
- `@reduxjs/toolkit`에서 `PayloadAction`을 지원하고 있었으며, 이 모듈을 통해 쉽게 action-payload의 타입을 지정할 수 있었습니다.
- 이는 <a href="https://redux-toolkit.js.org/tutorials/typescript#define-slice-state-and-action-types">Redux Toolkit 공식문서</a>에서 확인할 수 있었습니다.
---
#### 2-5 props Type을 React.FC로 해결하기
- 함수형 컴포넌트의 prop을 interface로 지정하고, 함수의 매개변수에 props의 타입을 지정해주었는데, React.FC를 사용하여 제네릭으로 props의 타입을 넘겨주었습니다.
- <a href="https://react.vlpt.us/using-typescript/02-ts-react-basic.html">벨로퍼트와 함께하는 모던 리액트</a>를 보고 참고하여 해결하였습니다.
##### 코드 수정 전
```
interface ProductCardProps {
  product: ApiDataInterFace;
}

export default function ProductCard({ product }: ProductCardProps) { ... }
```
##### 코드 수정 후
```
interface ProductCardProps {
  product: ApiDataInterFace;
}

const ProductCard : FC<ProductCardProps> = (props) => {
  const { product } = props; 
...
```

<br>
<br>
<br>

## 3. 리팩토링 (06.07~)
#### 3-1 다크모드
![다크모드](https://github.com/ddaeunbb/solo-shoppingmall/assets/82816029/30971529-27f1-4ec5-bc31-b8c74df06c95)
- 버튼을 누르면 테마를 지정할 수 있는 기능을 추가하였습니다. (light mode / dark mode)
- tailwind에서 dark모드를 활용하기 위해서, `dark:bg-gray-700`과 같이 `dark:`로 시작되는 클래스명이 다크모드에 적용된다는 것을 알게 되었습니다.
- 또한, tailwind.cofing.js에도 darkMode를 class로 활용하겠다는 코드를 적어주어야한다는 것을 알게 되었습니다.
  - 다크모드를 적용해보면서 클래스명만으로도 아주 손쉽게 모드를 적용할 수 있다는 것을 알게 되었습니다.
  - styled-components의 방식(`ThemeProvider`)도 있었지만 클래스명만으로 쉽게 적용되는 것이, 제가 느끼기에 이 방법이 더 간편하게 느껴졌습니다.
- 브라우저가 화면에 그리기전에 호출되는 `useLayoutEffect`를 활용하였습니다.
  - 다크 모드가 적용되기 전 화면을 그리고, useEffect가 수행되면서 다크 모드 화면을 그리게 됩니다. 직접 해보면 더 이해가 될텐데, useEffect로 구현을 해보면 아주 잠깐이지만 흰색 화면이 보였다가 다크모드가 적용되는 것을 확인할 수 있습니다.
