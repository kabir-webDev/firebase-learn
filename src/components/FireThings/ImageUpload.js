import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { db, storage } from "../../firebase";
import firebase from "firebase";
import "./Boom.css";

export default function ImageUpload() {
  const [caption, setCaption] = useState("");
  //   const [url, setUrl] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  console.log(name);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
        console.log(progress);
      },

      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              desc: caption,
              imageURL: url,
              name: name,
              avatar: url,
              birth: birth,
            });
            console.log(url);
            setProgress(0);
            setCaption("");
            setImage(null);
            setBirth("");
            setName("");
          });
      }
    );
  };
  // const HitIt = () => {
  //   db.collection("posts").add({
  //     name: "Kadir pur",
  //     state: "Kushtia",
  //     country: "Bangladesh",
  //   });
  // };
  return (
    <div className="container">
      <div className="inputs">
        <progress value={progress} max="100" />
        <input
          type="text"
          placeholder="enter a caption"
          onChange={(event) => setCaption(event.target.value)}
          value={caption}
        />{" "}
        <input type="file" onChange={handleChange} />
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <input type="date" onChange={(e) => setBirth(e.target.value)} />
        <Button variant="contained" onClick={handleUpload}>
          Upload
        </Button>
      </div>
    </div>
  );
}
