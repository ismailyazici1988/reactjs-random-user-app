import React from "react";
import UserCards from "./UserCards";

const Users = () => {
    //js
    const randomUser = () => {
        fetch("https://randomuser.me/api/").then((response)=> response.json()).then((data)=> console.log(data.results[0]))
    }





  return (
    <div className="my-5">
      <h1>Users</h1>
      <button className="btn btn-dark" onClick={randomUser}>Random User</button>
      <UserCards />
    </div>
  );
};

export default Users;
