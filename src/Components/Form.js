import React from "react";
import { useState } from "react";

const Form = () => {
  const [choreDesc, setChoreDesc] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = async (e) => {
    console.log({ choreDesc, name, date });
    e.preventDefault();
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ choreDesc, name, date }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Data saved succesfully");
      setDate("");
      setName("");
      setChoreDesc("");
      setRegistered(True);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>Chore description:</label>
      <br />
      <input
        name="choreDesc"
        type="text"
        value={choreDesc}
        onChange={(e) => setChoreDesc(e.target.value)}
      />
      <br />
      <label>Name:</label>
      <br />
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Date:</label>
      <br />
      <input
        name="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <br />
      <input type="submit" value="Add Log" />
    </form>
  );
};

export default Form;
