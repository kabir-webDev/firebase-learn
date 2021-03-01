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

  return (
    <div className="cont__items">
      {/* <ImageUpload /> */}
      {posts.map(({ name, birth, desc, imageURL, avatar }, index) => (
        <h2 key={index}>
          <div className="container">
            <DataBaseWork
              name={name}
              birth={birth}
              imageURL={imageURL}
              desc={desc}
              avatar={avatar}
            />
          </div>
        </h2>
      ))}
    </div>
  );
}

export default PapaDataBase;
