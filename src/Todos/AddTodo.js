const AddTodo = ({
  setTodo,
  todos
}) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const onName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const onContent = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  }

  const onAdd = () => {
    setTodo([...todos, {name, content, id: 1, checked: false}])
  }
  return (
    <div className="addtodo-app">
      <input type="text" onChange={onName} value={name} />
      <input type="text" onChange={onContent} value={content} />
      <button onClick={onAdd}>Add Todo</button>
    </div>
  );
}

export default AddTodo;