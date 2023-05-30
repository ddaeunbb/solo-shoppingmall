# Solo ShoppingMall Project

## Stack

- 스택설명


## Folder Structure


## Feature

## 1. BugFix
#### 1-1 HamburgerModal
- 햄버거 모달이 hover될 때마다, 안쪽 자식 요소가 부모요소 바깥으로 나오는 것을 수정해주었습니다.
  - ![bugfix](https://github.com/ddaeunbb/solo-shoppingmall/assets/82816029/7bf435b0-7260-431e-a702-b2b980a47a52)

## 2. 프로젝트 진행 중 배운 것
#### 2-1 tailwind preflight
- reset.css를 적용하려고 하다가 `@tailwind base;`를 index.css에 적용하면 **reset.css와 비슷한 preflight**가 적용됨을 알 수 있었습니다. 더 자세한 내용은 <a href="https://www.daleseo.com/tailwind-preflight/">링크</a>를 통해 알 수 있었습니다. 또한 <a href="https://tailwindcss.com/docs/preflight#border-styles-are-reset-globally">테일윈드 공식문서</a>를 통해서도 확인 할 수 있었습니다. 
#### 2-2 rootReducer type 참조 (useSelector, useDispatch)
- useSelector로 store에 접근할 때마다, state의 타입을 지정해야한다는 에러메세지 보게 되었습니다.
- 에러를 해결하기 위해 RootState로 interface화하여 해결하였으나,**이는 잘못된 방식이었으며, <a href="https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-state-type">Redux Toolkit 공식문서</a>를 통해 코드를 수정**하였습니다.
  - 코드 수정 전 <img width="335" alt="스크린샷 2023-05-30 오후 10 46 28" src="https://github.com/ddaeunbb/solo-shoppingmall/assets/82816029/cdf64f7d-8a64-4aea-afec-f8d94027bc77">
  - 코드 수정 후 <img width="400" alt="스크린샷 2023-05-30 오후 10 46 34" src="https://github.com/ddaeunbb/solo-shoppingmall/assets/82816029/7cca3188-bc96-4a81-8a00-835478a1773b">

