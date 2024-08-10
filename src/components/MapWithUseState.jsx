import React, { useState } from "react";

export const MapWithUseState = () => {
  const [users, setusers] = useState([
    {
      id: 101,
      name: "ram",
      age: 23,
    },
    {
      id: 102,
      name: "amit",
      age: 24,
    },
  ]);
  const addElement = () => {
    var obj = {
      id: 103,
      name: "parth",
      age: 25,
    };
    //users = users.push(obj);
    //spreadoperaotr...
    // users = [...users,obj];
    // console.log("users after push",users);
    //  setusers(users);
    setusers([...users, obj]);
    //        console.log("users after push",users);
  };
  return (
    <div>
      <h1>MAP DEMO...</h1>
      <button
        onClick={() => {
          addElement();
        }}
      >
        Add Element
      </button>
      <ul>
        {users.map((user) => {
          return (
            <li>
              {user.id}--{user.name}--{user.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
