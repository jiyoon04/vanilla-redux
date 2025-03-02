import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo } from "./store";

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

  // Redux에서 todos만 가져오기
  const todos = useSelector((state) => state.todos); // 'todos'만 가져오기

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button onClick={onClick}>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li> // todos 목록 출력
        ))}
      </ul>
    </>
  );
};

export default Home;
