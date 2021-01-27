import React from "react";
import Kiddo from "./Kiddo";

function Papa() {
  const data = [
    {
      name: "Kabir Hasan",
      age: "25",
      grade: "3.50",
      subject: "BSc in CSE",
      expert: "Web Developement",
    },
    {
      name: "Tahmidur Rehman",
      age: "24",
      grade: "3.83",
      subject: "BSc in CSE",
      expert: "Teaching",
    },
    {
      name: "Mohidul Sagor",
      age: "25",
      grade: "3.25",
      subject: "BSc in AP",
      expert: "Data Science",
    },
    {
      name: "Naim Zaman",
      age: "24",
      grade: "3.60",
      subject: "BSc in CE",
      expert: "Picking up Girls",
    },
    {
      name: "Tonmoy Jula",
      age: "26",
      grade: "2.50",
      subject: "BSc in IPE",
      expert: "Mama Ache Backup",
    },
  ];
  console.log(data);
  return (
    <div>
      {data.map((info) => (
        <Kiddo {...info} />
      ))}
    </div>
  );
}

export default Papa;
