import React from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Users({ username, user, setUsers, users }) {
  const deleteHandler = () => {
    setUsers(users.filter((el) => el.id !== user.id));
    axios.delete(`http://localhost:5000/users/${user.id}`, {});
  };
  return (
    <div className=" level is-mobile mt-5 ">
      <h1 className=" level-item level-left ml-1">
        username: {user.username}
      </h1>
      <button
        className=" button level-right  is-danger ml-5"
        onClick={deleteHandler}
      > 
        <FaTrash />
      </button>
      <button className=" button level-right is-warning ml-3">
        <FaEdit />
      </button>
    </div>
  );
}
