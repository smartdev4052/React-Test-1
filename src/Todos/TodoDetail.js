import { useParams } from "react-router-dom";

const TodoDetail = ({
  todos
}) => {
  const {id} = useParams();
  const todo = todos[id];
  return (
    <div className="tododetail-app">
      <li>{todo.checked}</li>
      <li>{todo.id}</li>
      <li>{todo.name}</li>
      <li>{todo.content}</li>
    </div>
  );
}

export default TodoDetail;