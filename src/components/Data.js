import { School } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import firebase from "../firebase";

import { useForm } from "react-hook-form";

function Data() {
  const [user, setUser] = useState({});
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    setUser(data);
  };
  const [school, setSchool] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("school");

  function getSchool() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setSchool(items);

      setLoading(false);
      console.log(school);
    });
  }
  useEffect(() => {
    getSchool();
  }, []);

  const saveStudent = async (data) => {
    await firebase.firestore().collection("school").add({
      id: 111,
      name: "Charlie",
      expert: "Singing",
      cg: "2.88",
    });
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <form style={{ marginTop: "20px" }} onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ padding: "20px" }}
          name="name"
          placeholder="enter your name"
          ref={register}
        />
        <br /> <br />
        <input
          style={{ padding: "20px" }}
          name="id"
          placeholder="enter your id"
          ref={register}
        />
        <br /> <br />
        <input
          style={{ padding: "20px" }}
          name="cg"
          placeholder="enter your cg"
          ref={register}
        />
        <br /> <br />
        <input
          style={{ padding: "20px" }}
          name="expert"
          placeholder="enter expertise"
          ref={register({ required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <br /> <br />
        <button onClick={saveStudent}>Enter Students</button>
        {/* <input style={{ padding: "20px" }} type="submit" /> */}
      </form>
      <h1>Students Information</h1>
      <button onClick={saveStudent}>Enter Students</button>
      {school.map((student) => (
        <div key={student.id}>
          <h2>Name: {student.name}</h2>
          <p>Expertise: {student.expert}</p>
          <p>CGPA: {student.cg}</p>
        </div>
      ))}
    </div>
  );
}

export default Data;
