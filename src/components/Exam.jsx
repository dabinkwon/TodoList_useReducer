import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return state + action.data;
    case "decrease":
      return state - action.data;
    default:
      state;
  }
};

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    dispatch({
      type: "increase",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "decrease",
      data: 1,
    });
  };

  return (
    <div>
      {state}
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
