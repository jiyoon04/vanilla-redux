import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo } from "./store";
import { Link } from "react-router-dom";

const Home = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch(); // dispatch 함수 가져오기

  // 입력 필드 값 변경
  function onChange(e) {
    setText(e.target.value);
  }

  // 폼 제출 시
  function onSubmit(e) {
    e.preventDefault();
    setText(""); // 입력 필드 초기화
  }

  // Add 버튼 클릭 시 ToDo 추가
  const onClick = () => {
    dispatch(addToDo(text)); // 액션을 디스패치하여 상태 변경
  };

  // X 버튼 클릭 시 ToDo 삭제
  const btnOnClick = (event) => {
    const targetId = event.target.parentNode.id;
    dispatch({ type: "DELETE", id: targetId });
  };

  // Redux에서 todos만 가져오기
  const todos = useSelector((state) => state.todos); // 'todos'만 가져오기

  return (
    <>
      <h1>To Dos</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button onClick={onClick}>Add</button>
      </form>
      <ul>
        {todos.map((state) => (
          <li key={state.id} id={state.id}>
            <Link to={`${state.id}`}>{state.text}</Link>
            <button onClick={btnOnClick}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
