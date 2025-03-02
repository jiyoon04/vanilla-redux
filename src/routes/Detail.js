import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const param = useParams();
  const todos = useSelector((state) => state.todos);

  const onClickBackBtn = () => navigate(-1);
  const onClickHomeBtn = () => navigate("/");

  const todo = todos.find((item) => item.id === param.id);

  // todo가 없을 때 처리
  if (!todo) {
    return <h1>Todo not found!</h1>;
  }

  return (
    <>
      <h1>Detail of {todo.text}</h1>
      <b>자세한 설명은 생략한다.</b>
      <h2>Others</h2>
      <ul>
        {todos.map((todo) => (
          <Link key={todo.id} to={`/${todo.id}`}>
            <li>{todo.text}</li>
          </Link>
        ))}
      </ul>
      <button onClick={onClickBackBtn}> Go Back</button>
      <button onClick={onClickHomeBtn}> Go Home</button>
    </>
  );
};

export default Detail;
