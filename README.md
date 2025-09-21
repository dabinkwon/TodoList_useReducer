# Todo List with useReducer

React의 `useReducer`를 활용하여 Todo List 기능을 구현한 연습 프로젝트입니다.  
Redux의 `useDispatch` 훅 사용 방식에 익숙해지기 위한 목적으로 작성되었습니다.

---

## 기능

- Todo 추가 (`onCreate`)
- Todo 수정 (`onUpdate`)
- Todo 삭제 (`onDelete`)

모든 동작은 `dispatch`를 통해 액션 객체를 `reducer`로 전달하여 상태를 업데이트합니다.

## 최적화

- useMemo:
  total, done, notDone 값을 화면에 렌더링할 때 불필요한 연산을 방지하기 위해 사용합니다.
  최초에 계산된 값을 저장해 두었다가, 필요할 때 재사용하여 연산을 최적화하는 리액트 훅입니다.

- memo:
  컴포넌트를 인수로 받아 최적화된 컴포넌트로 반환합니다.
  부모 컴포넌트가 리렌더링되더라도, 자신이 받은 props가 바뀌지 않으면 리렌더링되지 않도록 하여 성능을 개선합니다.

- useCallback:
  memo만으로는 객체 타입 props 최적화가 어렵습니다.
  객체는 참조형이라 리렌더링될 때마다 새로운 주소값을 가지므로, memo는 props가 변경된 것으로 인식합니다.
  useCallback은 이러한 문제를 해결해, 함수나 객체 타입 props가 불필요하게 새로 생성되지 않도록 방지하는 훅입니다.
