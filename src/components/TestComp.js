import { formatMs } from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function TestComp() {
  const [todos, setTodos] = useState([
    {
      id: 555,
      name: "Eren Yeager",
      expert: "Attack Titan",
      isCompleted: false,
    },
    {
      id: 333,
      name: "Levi Acreman",
      expert: "Captain",
      isCompleted: false,
    },
    {
      id: 111,
      name: "Erwin",
      expert: "Commender",
      isCompleted: false,
    },
  ]);
  const { register, handleSubmit, error } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setTodos([...todos, data]);
  };

  const markComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "25px" }}>
        <input name="id" type="number" ref={register} />
        <br />
        <input name="name" ref={register} />
        <br />

        <input name="expert" ref={register} />
        <br />

        <input type="submit" />
      </form>
      {todos.map((todo, index) => (
        <p style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
          <input
            type={"checkbox"}
            onChange={() => markComplete(index)}
            name={"completed"}
            id={todo.id}
          />{" "}
          {todo.name}
        </p>
      ))}
    </>
  );
}

export default TestComp;
