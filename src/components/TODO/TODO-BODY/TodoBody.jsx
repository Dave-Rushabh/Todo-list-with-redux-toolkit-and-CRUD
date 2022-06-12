import React from "react";
import { useState } from "react";
import { addTodo, removeTodo, editTodo } from "../../../redux/reducers/todo";
import { useSelector, useDispatch } from "react-redux";

const TodoBody = () => {
  const dispatch = useDispatch();
  const allTodo = useSelector((state) => state.todoReducer.todoList);
  const editCurrentTodo = useSelector((state) => state.todoReducer.todoList);
  const [todo, setTodo] = useState("");
  const [todoObj, setTodoObj] = useState({
    todo: "",
    id: null,
  });

  console.log("allTodo", allTodo);
  console.log("edit current", editCurrentTodo);
  const handleChange = (event) => {
    setTodoObj({
      ...todoObj,
      id: allTodo.length + 1,
      todo: event.target.value,
    });
    setTodo(event.target.value);
  };

  const handleAdd = () => {
    dispatch(addTodo(todoObj));
    setTodo("");
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEdit = (id) => {
    dispatch(editTodo(id));
  };

  return (
    <>
      <div>TodoBody</div>
      <input
        type="text"
        name=""
        id=""
        value={todo}
        placeholder="add todo"
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>

      <br />
      <br />
      <h1>my todos:</h1>
      <div>
        {allTodo.map((item) => (
          <>
            <div key={item.id}>
              {item.todo}
              <span>
                <button onClick={() => handleDelete(item.id)}> DELETE </button>
              </span>
              <span>
                <button onClick={() => handleEdit(item.id)}> EDIT </button>
              </span>
            </div>

            <p>you are editing this</p>
            {editCurrentTodo[0].todo}
          </>
        ))}
      </div>
    </>
  );
};

export default TodoBody;
