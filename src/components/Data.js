import axios from "axios";
import React, { useState, useEffect } from "react";

function Data() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true);
      const res = await axios("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
      setUser(res.data);
      setLoading(false);
    };
    fetchItem();
  }, []);

  return (
    <div>
      {user.map((person, id) =>
        loading ? <h3>Loading </h3> : <h2>{person.name}</h2>
      )}
    </div>
  );
}

export default Data;
