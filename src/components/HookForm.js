import React, { useState } from "react";

import { useForm } from "react-hook-form";

function HookForm() {
  const [user, setUser] = useState({});
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    setUser(data);
  };

  console.log(user); // watch input value by passing the name of it

  return (
    <form style={{ marginTop: "20px" }} onSubmit={handleSubmit(onSubmit)}>
      <input
        style={{ padding: "20px" }}
        name="example"
        placeholder="enter your name"
        ref={register}
      />
      <br /> <br />
      <input
        style={{ padding: "20px" }}
        name="exampleRequired"
        placeholder="enter password"
        ref={register({ required: true })}
      />
      {errors.exampleRequired && <span>This field is required</span>}
      <br /> <br />
      <input style={{ padding: "20px" }} type="submit" />
    </form>
  );
}

export default HookForm;
