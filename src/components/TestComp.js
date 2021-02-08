import React, { useState } from "react";
import { useForm } from "react-hook-form";

function TestComp() {
  const { register, handleSubmit, error } = useForm();
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Shikhte hobe",
      isCompleted: false,
    },
    {
      id: 2,
      task: "Taka Kamaite hobe",
      isCompleted: false,
    },
    {
      id: 3,
      task: "Biye korte hobe",
      isCompleted: false,
    },
  ]);

  const onSubmit = (data) => {
    setTodos([...todos, data]);
    console.log(todos);
  };

  const markDone = (index) => {
    const newTodo = [...todos];
    newTodo[index].isCompleted = !newTodo[index].isCompleted;
    setTodos(newTodo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "25px" }}>
        <input name="task" placeholder="enter todo" ref={register} />
        <br />
        <input type="submit" value="Hit It" />
      </form>
      {todos.map((todo, index) => (
        <p
          key={index}
          style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
          <input type="checkbox" onChange={() => markDone(index)} />
          {todo.task}
        </p>
      ))}
    </div>
  );
}

export default TestComp;
