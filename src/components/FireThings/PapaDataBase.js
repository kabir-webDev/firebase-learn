import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import DataBaseWork from "./DataBaseWork";
import ImageUpload from "./ImageUpload";

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
    <div>
      <ImageUpload />
      {posts.map(({ name, birth, desc, imageURL, avatar }, index) => (
        <h2 key={index}>
          <DataBaseWork
            name={name}
            birth={birth}
            imageURL={imageURL}
            desc={desc}
            avatar={avatar}
          />
        </h2>
      ))}
    </div>
  );
}

export default PapaDataBase;
