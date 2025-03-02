import { legacy_createStore as createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: // 가장 첫번째 요소로 추가
      return {
        ...state,
        todos: [{ text: action.text, id: crypto.randomUUID() }, ...state.todos],
      };
    case DELETE: // id 같지 않으면 true기에 새로운 배열에 추가 - 같으면 제외 (삭제!)
      return {
        ...state,
        todos: state.todos.filter((toDo) => toDo.id !== action.id),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
