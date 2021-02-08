import { MarkunreadOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function TestComp() {
  const { register, handleSubmit, error } = useForm();
  const [todos, setTodos] = useState([
    {
      id: 328,
      name: "Kabir Hasan",
      expert: "Web Developement",
      isCompleted: false,
    },
    {
      id: 300,
      name: "Eren Yeager",
      expert: "Attack Titan",
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
        <input name="id" type="number" ref={register} />
        <br />
        <input name="name" ref={register} />
        <br />
        <input name="expert" ref={register} />
        <br />
        <input type="submit" value="Hit It" />
      </form>
      {todos.map((todo, index) => (
        <p
          key={index}
          style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
          <input type="checkbox" onChange={() => markDone(index)} />
          {todo.name}
        </p>
      ))}
    </div>
  );
}

export default TestComp;
