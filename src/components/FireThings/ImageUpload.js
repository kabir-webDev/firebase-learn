import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { db, storage } from "../../firebase";
import firebase from "firebase";

export default function ImageUpload() {
  const [caption, setCaption] = useState("");
  //   const [url, setUrl] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const myname = "Mr. Walah";
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
              name: myname,
              avatar: url,
            });
            console.log(url);
            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };
  const HitIt = () => {
    db.collection("posts").add({
      name: "Kadir pur",
      state: "Kushtia",
      country: "Bangladesh",
    });
  };
  return (
    <div>
      <progress value={progress} max="100" />
      <input
        type="text"
        placeholder="enter a caption"
        onChange={(event) => setCaption(event.target.value)}
        value={caption}
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
      <Button color="primary" variant="contained" onClick={HitIt}>
        Hit it
      </Button>
    </div>
  );
}
