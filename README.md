# Todo List with useReducer

React의 `useReducer`를 활용하여 Todo List 기능을 구현한 연습 프로젝트입니다.  
Redux의 `useDispatch` 훅 사용 방식에 익숙해지기 위한 목적으로 작성되었습니다.

---

## 기능

- Todo 추가 (`onCreate`)
- Todo 수정 (`onUpdate`)
- Todo 삭제 (`onDelete`)

모든 동작은 `dispatch`를 통해 액션 객체를 `reducer`로 전달하여 상태를 업데이트합니다.
