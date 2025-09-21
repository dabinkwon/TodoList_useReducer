import { useCallback, useReducer, useRef } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.todoId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.todoId);
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    // 액션 객체를 반환
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((todoId) => {
    dispatch({
      type: "UPDATE",
      todoId,
    });
  }, []);

  const onDelete = useCallback((todoId) => {
    dispatch({
      type: "DELETE",
      todoId,
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
