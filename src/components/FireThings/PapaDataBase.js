import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import DataBaseWork from "./DataBaseWork";
import ImageUpload from "./ImageUpload";
import "./Boom.css";

function PapaDataBase() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  // console.log(posts);
  const handleDelete = (id) => {
    db.collection("posts").doc("InMq2YQymj7G5QOVT1kj").delete();
  };

  return (
    <div className="cont__items">
      {/* <ImageUpload /> */}
      {posts.map(({ name, birth, desc, imageURL, avatar, id }, index) => (
        <h2 key={index}>
          <div className="container">
            <DataBaseWork
              name={name}
              birth={birth}
              imageURL={imageURL}
              desc={desc}
              avatar={avatar}
              id={id}
              handleDelete={handleDelete}
            />
          </div>
        </h2>
      ))}
    </div>
  );
}

export default PapaDataBase;
